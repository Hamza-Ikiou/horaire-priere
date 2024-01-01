import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: {
        defaultLocalisation: 'Montpellier',
        horairesDuMois: [],
        horairesDuJour: {},
        direction: 0,
    },
    getters: {
        getDefaultLocalisation(state) {
            if (state.defaultLocalisation) {
                return state.defaultLocalisation;
            }
        },
        getHorairesDuMois(state) {
            if (state.horairesDuMois) {
                return state.horairesDuMois;
            }
        },
        getHorairesDuJour(state) {
            if (state.horairesDuJour) {
                return state.horairesDuJour;
            }
        },
        getDirection(state) {
            if (state.direction) {
                return state.direction;
            }
        }
    },
    mutations: {
        setHorairesDuMois(state, horaires) {
            state.horairesDuMois = horaires;
            localStorage.setItem('horairesDuMois', JSON.stringify(horaires));
        },
        setHorairesDuJour(state, horaires) {
            state.horairesDuJour = horaires;
            localStorage.setItem('horairesDuJour', JSON.stringify(horaires));
        },
        setDirection(state, direction) {
            state.direction = direction;
            localStorage.setItem('direction', JSON.stringify(direction));
        },
    },
    actions: {
        async fetchHoraires(context, city) {

            const horaires = await axios.get("http://api.aladhan.com/v1/calendarByCity", {
                params: {
                    city: city ? city : context.getters.getDefaultLocalisation,
                    country: 'France',
                }
            });
            context.commit("setHorairesDuMois", horaires.data.data);

            for (let horaire of context.getters.getHorairesDuMois) {
                let object = horaire.timings;
                ["Sunrise", "Sunset", "Imsak", "Midnight", "Firstthird", "Lastthird"].forEach(e => delete object[e]);
                for (let key in object) {
                    object[key] = object[key].replace(" (CEST)", "");
                    object[key] = object[key].replace(" (CET)", "");
                }
            }

            const horairesDuJour = context.getters.getHorairesDuMois.find((item) => {
                let today = new Date();
                let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
                let month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
                let date = day + '-' + month + '-' + today.getFullYear();
                return item.date.gregorian.date === date;
            });

            context.commit("setHorairesDuJour", horairesDuJour);

            const direction = await axios.get(
                "http://api.aladhan.com/v1/qibla/" +
                context.getters.getHorairesDuJour.meta.latitude + "/" +
                context.getters.getHorairesDuJour.meta.longitude
            );

            const roundedDirection = Math.round(direction.data.data.direction);
            context.commit("setDirection", roundedDirection);
        }
    },
});