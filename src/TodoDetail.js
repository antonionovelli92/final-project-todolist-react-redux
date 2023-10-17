import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TodoDetail() {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.find((t) => t.id === parseInt(id))
  );

  // Todo: ****'useSelector'**** è utilizzato per estrarre parti dello stato da Redux in un componente React. Questo hook ti consente di accedere a dati dallo stato globale e di usarli per renderizzare il tuo componente.Dopo aver utilizzato useSelector per estrarre dati dallo stato, potresti aver bisogno di eseguire azioni che influiscono su quel dato o su altri dati nello stato. Ecco dove entra in gioco ******'dispatch'******. dispatch è utilizzato per inviare azioni a Redux, il che può causare una modifica nello stato globale.

  // ! Se non ci sono task
  if (!task) {
    return (
      <div className="text-center mt-5">
        <h3>Nessuna attività trovata</h3>
        <Link to="/" className="btn btn-danger mt-3">
          Torna alla lista
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card rounded-4 shadow text-white border border-warning border-5">
        <div className="card-body bg-success bg-gradient rounded-3 p-4 ">
          <h2 className="card-title">Focus sull'attività:</h2>
          <p className="card-text">
            <strong>Task:</strong> {task.text}
          </p>
          <p className="card-text">
            <strong>Stato:</strong> {task.completed ? "Fatto" : "Da fare"}
          </p>
          <Link to="/" className="btn btn-danger shadow border-white">
            Torna alla lista
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
