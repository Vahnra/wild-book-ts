import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Wilder from './components/Wilder';
import AddWilder from './components/AddWilder';
import { IWilderProps } from './entity/Wilder';
import { IGradeFromApi, IWilderFromApi } from './entity/WilderApi';

const formatWildersFromApi = (wilders: IWilderFromApi[]): IWilderProps[] =>
  wilders.map((wilder) => {
    return {
      id: wilder.id,
      city: wilder.city,
      name: wilder.name,
      skill: wilder.grade.map((grade: IGradeFromApi) => {
        return { id: grade.id, votes: grade.grade, title: grade.skill.name };
      }),
    };
  });

function App() {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);

  const fetchWilders = async () => {
    const apiWilders = await axios.get<IWilderFromApi[]>("http://localhost:5000/api/wilder");
    setWilders(formatWildersFromApi(apiWilders.data));
  }

  useEffect(() => {
    fetchWilders();
  }, []);

  return (
    <div>
      
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>

        <AddWilder/>
        
        <section className="card-row">

          {
            wilders.map((wilder: IWilderProps) => (
              <Wilder 
                key={wilder.id} 
                name={wilder.name}
                city={wilder.city}
                skill={wilder.skill} 
                id={wilder.id} 
              />
            ))
          }

        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
