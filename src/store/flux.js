import axios from "axios";


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            character: [],
            auth: false,
            team: [],
        },

        actions: {
            addHero: hero => {
                setStore({
                    // favoritos = favoritos en store + lo nuevo que viene por el parametro
                    team: getStore().team.concat(hero)
                });
                getActions().averagePower();
            },
            removeHero: elem => {
                setStore({
                    team: getStore().team.filter(item => item.id !== elem)
                });
                getActions().averagePower();
            },

            logout: () =>{
                localStorage.removeItem('token');
                setStore({auth:false})
            },
            
            averagePower: () => {
                //obtengo la store
                let store = getStore();
                //declaramos variables contadores de poderes
                let intelligence = 0;
                let strength = 0;
                let speed = 0;
                let durability = 0;
                let power = 0;
                let combat = 0;

                //recorremos el array team para hacer el average
                store.team.forEach(item => {

                    intelligence += parseInt(item.powerstats.intelligence)
                    strength += parseInt(item.powerstats.strength)
                    speed += parseInt(item.powerstats.speed)
                    durability += parseInt(item.powerstats.durability)
                    power += parseInt(item.powerstats.power)
                    combat += parseInt(item.powerstats.combat)
                });
                //seteo el average a la store
                setStore({
                    teampowerstats: { intelligence, strength, speed, durability, power, combat }
                })
            },

            searchHero: (name) => {

                axios.get(`https://www.superheroapi.com/api.php/${process.env.REACT_APP_KEYSH}/search/${name}`
                )
                    .then((response) => {
                        if (response.data.error) {
                            alert('Nombre de personaje, no encontrado')
                        }
                        setStore({ character: response.data.results })
                    })
                    .catch((err) => console.log("error" + err))

            },
            //hacemos login
            login: (email, password) => {

                axios.post('https://superhero-api1.herokuapp.com/', {
                    email: email,
                    password: password
                }).then((response) => {

                    if (response.data.error) {
                        alert(response.data.error)
                        setStore({ auth: false })
                    } else {
                        localStorage.setItem('token', response.data.token)
                    setStore({ auth: true })
                    }
                    
                }).catch((err) => console.log(err));
            },
        }
    };
};

export default getState;