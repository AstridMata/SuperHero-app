import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import CardSkills from '../components/CardSkills';
import AveragePower from '../components/AveragePowers';

const MyTeam = () => {
    const { store } = useContext(Context)
    return (
        <> <AveragePower/>
        <div className="all-container Home">
            <div className="container">
            <h2 className="my-5 text-center text-white">Team</h2>
                <div className="row">

                    {store.team.length<0 ? null: store.team.map((item) =>

                        <div className= "col-sm-6 col-md-4 col-lg-3 py-3" key={item.id}>
                            <CardSkills
                                name={item.name}
                                powerstats={item.powerstats}
                                id={item.id}
                                urlImg={item.urlImg}
                                alignment={item.alignment} />
                        </div>
                    )}
                </div> </div> </div>
        </>
    )
}
export default MyTeam;