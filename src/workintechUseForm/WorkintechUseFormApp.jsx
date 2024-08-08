import { useState } from 'react';
import { initialTasks, initialTeam } from './dataUseForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WorkintechTaskHookForm from './WorkintechUseFormTaskHookForm';
import WorkintechUseFormPeopleForm from './WorkintechUseFormPeopleForm';
import WorkintechUseFormTask from './WorkintechUseFormTask';
import "./workintechUseForm.css"

function WorkintechUseFormApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [team, setTeam] = useState(initialTeam);

  function handleTaskSubmit(yeniTask) {
    setTasks([yeniTask, ...tasks]);
    toast.success('Yeni görev oluşturuldu.');
  }

  function handlePeopleSubmit(yeniKisi) {
    setTeam([...team, yeniKisi]);
    toast.success('Yeni kişi oluşturuldu.');
  }

  function handleComplete(id) {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          return { ...t, status: 'yapıldı' };
        }
        return t;
      })
    );
    toast.success(`${id} idli görev tamamlandı.`);
  }

  return (
    <>
      <div className="app">
        <div className="formColumn">
          <div className="form-container">
            <h2 className='text-xl text-blue-600 font-bold text-center'>Yeni Task</h2>
            <WorkintechTaskHookForm kisiler={team} submitFn={handleTaskSubmit} />
          </div>

          <div className="form-container">
            <h2>Yeni Kişi</h2>
            <WorkintechUseFormPeopleForm kisiler={team} submitFn={handlePeopleSubmit} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="column-title">Yapılacaklar</h2>
            <div className="column-list">
              {tasks
                .filter((t) => t.status === 'yapılacak')
                .map((t) => (
                  <WorkintechUseFormTask key={t.id} taskObj={t} onComplete={handleComplete} />
                ))}
            </div>
          </div>
          <div className="column">
            <h2 className="column-title">Tamamlananlar</h2>
            <div className="column-list">
              {tasks
                .filter((t) => t.status === 'yapıldı')
                .map((t) => (
                  <WorkintechUseFormTask key={t.id} taskObj={t} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default WorkintechUseFormApp;
