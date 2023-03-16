import axios from "axios";
import { useEffect, useState } from "react";
import { ISkill } from "../entity/Skill";

const AddSkill = ({id}: {id: number}) => {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState<ISkill["name"]>("");
  const [grade, setGrade] = useState<ISkill["grade"]>(1);

  const fetchSkills = async () => {
    const apiSkills = await axios.get("http://localhost:5000/api/skill");
    setSkills(apiSkills.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:5000/api/addSkill", {
          wilderName: id,
          skills: [
            {
              skillName: skillName,
              grade: grade,
            },
          ],
        });
        window.location.reload();
      }}
    >
      <label htmlFor="skill" className="mt-4 fw-bold">Ajouter un skill</label>

      <select
        className="form-select mt-2"
        name="skill"
        id="skill"
        onChange={(e) => {
          setSkillName(e.target.value);
        }}
      >
        <option disabled selected>Choisissez</option>
        {skills.map((skill: ISkill) => (
          <option key={skill.id} value={skill.name}>
            {skill.name}
          </option>
        ))}
      </select>

      <input
        className="form-control mt-2 mb-2"
        type="number"
        min="1"
        max="10"
        defaultValue="1"
        value={grade}
        onChange={(e) => {
          setGrade(parseInt(e.target.value));
        }}
      />

      <button className="btn btn-primary">Ajouter</button>

    </form>
  );
};

export default AddSkill;
