import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: {
        defaultLocalisation: 'Montpellier',
        horairesDuMois: [],
        horairesDuJour: {}
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
        }
    },
    actions: {
        async fetchHorairesDuMois(context, filter) {
            const response = await axios.get("http://api.aladhan.com/v1/calendarByCity", {
                params: {
                    city: filter && filter.city ? filter.city : context.getters.getDefaultLocalisation,
                    country: 'France',
                }
            });
            context.commit("setHorairesDuMois", response.data.data);
            const horairesDuJour = response.data.data.find((item) => {
                let today = new Date();
                let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
                let date = day + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                return item.date.gregorian.date === date;
            });
            context.commit("setHorairesDuJour", horairesDuJour);
        }
    },
});