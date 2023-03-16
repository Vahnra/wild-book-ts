import { useState } from "react";
import { ISkill } from "../entity/Skill";
import axios from "axios";


const Skill = ({name, grade, id}: ISkill) => {

    const [skillGrade, setGrade] = useState<ISkill["id"]>(grade);

    return (
      <li>
        <div className="mt-2">{name}</div>
        
        {/* <span className="votes">{grade}</span> */}
        <select
          className="form-select"
          onChange={async (e) => {
            setGrade(parseInt(e.target.value));   
            await axios.put("http://localhost:5000/api/wilder/changeSkillScore", {
                skillId: id,
                grade: parseInt(e.target.value)
            });
            window.location.reload();
          }}
        >
          <option selected>{skillGrade}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </li>
    );

}

export default Skill;