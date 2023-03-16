import axios from "axios";
import { useState } from "react";
// import { ISkill } from "../entity/Skill";
import { IWilderProps } from "../entity/Wilder";

const AddWilder = () => {

    const [name, setName] = useState<IWilderProps["name"]>("");
    const [city, setCity] = useState<IWilderProps["city"]>("");
    // const [skills, setSkills] = useState([]);
    // const [skillName, setSkillName] = useState<any>([]);

    // const fetchSkills = async () => {
    //     const apiSkills = await axios.get("http://localhost:5000/api/skill");
    //     setSkills(apiSkills.data);
    // };

    // useEffect(() => {
    //     fetchSkills();
    // }, []);

    return (

        <div>
            <form 
                onSubmit={async (e) => {
                    e.preventDefault();
                    await axios.post("http://localhost:5000/api/wilder", {name: name, city: city});
                    window.location.reload();
                }}
            >
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Nom</label>
                        <input 
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                    </div>

                    <div className="col-6">
                        <label htmlFor="city" className="form-label">Ville</label>
                        <input 
                            className="form-control"
                            type="text"
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value)
                            }}
                        />
                    </div>
                </div>
                {/* <label htmlFor="skill" className="form-label mt-4">Vos skills</label> */}

                {/* <div className="container py-0">
                    <div className="row">
                        {
                            skills.map((skill: ISkill) => (
                                <div className="form-check col-2">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        value={skill.id} 
                                        id="flexCheckDefault" 
                                        onChange={(e) => {
                                            if (e.target.checked === true) {
                                                setSkillName((skillName: any) => [...skillName, e.target.value]);
                                            }
                                           
                                            console.log(skillName);                                 
                                        }}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {skill.name}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div> */}

                <button className="btn btn-primary mb-5 mt-4">Ajouter le Wilder</button>
            </form>
        </div>
    )
}

export default AddWilder;