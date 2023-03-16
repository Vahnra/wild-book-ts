import blank_profile from '../assets/blank_profile.png';
import Skill from './Skill';
import axios from "axios";
import AddSkill from './AddSkill';
import { IWilderProps } from '../entity/Wilder';


const Wilder = ({ name, skill, id, city}: IWilderProps) => {   

    return (
        <article className="card">
            <img src={blank_profile} alt="Jane Doe Profile" />
            <h3>{name}</h3>
            {city ? <h4>{city}</h4> : null}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <ul className="skills">

                {
                    skill.map((item) => (
                        <Skill key={item.id} id={item.id} name={item.title} grade={item.votes}/>              
                    ))       
                }
                
            </ul>

            <AddSkill id={id} />

            <button
                className="btn btn-outline-danger mt-4"
                onClick={ async (e) => {
                    e.preventDefault();
                    await axios.delete(`http://localhost:5000/api/wilder/${id}`);
                    window.location.reload();
                }}
            >
                Delete wilder
            </button>
        </article>
    )
    
};

export default Wilder;