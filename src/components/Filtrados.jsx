import React, { useEffect } from "react";
import { getFiltrados } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Digimon from "./Digimon";
import "../style/Display.css";

const Filtrados = (props) => {
  let { level } = useParams();

  const dispatch = useDispatch();

  const filtrados = useSelector((state) => state.filtrados);

  useEffect(() => {
    dispatch(getFiltrados(level));
  }, [level]);

  return (
    <div className="body">
      {filtrados.map((filtrado) => (
        <Digimon
          name={filtrado.name}
          level={filtrado.level}
          img={filtrado.img}
        />
      ))}
    </div>
  );
};

export default Filtrados;
