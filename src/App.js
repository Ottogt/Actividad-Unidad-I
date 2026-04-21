import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Header from './components/Header';
import GoalForm from './components/GoalForm';
import GoalCard from './components/GoalCard';

function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddGoal = (goal) => {
    const newGoal = {
      id: Date.now(),
      ...goal,
      tasks: [],
      createdAt: new Date()
    };
    setGoals([...goals, newGoal]);
    setShowModal(false);
  };

  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  const handleAddTask = (goalId, task) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          tasks: [...goal.tasks, { id: Date.now(), ...task, completed: false }]
        };
      }
      return goal;
    }));
  };

  const handleDeleteTask = (goalId, taskId) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          tasks: goal.tasks.filter(task => task.id !== taskId)
        };
      }
      return goal;
    }));
  };

  const handleToggleTask = (goalId, taskId) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          tasks: goal.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          })
        };
      }
      return goal;
    }));
  };

  return (
    <div className="app-container">
      <Header />
      <Container fluid className="main-content">
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="add-goal-btn"
              onClick={() => setShowModal(true)}
            >
              + AGREGAR META
            </Button>
          </Col>
        </Row>

        <GoalForm 
          show={showModal} 
          handleClose={() => setShowModal(false)}
          handleAddGoal={handleAddGoal}
        />

        {goals.length === 0 ? (
          <Row className="mt-5">
            <Col md={12} className="text-center">
              <p className="no-goals-message">No tienes metas registradas. ¡Crea una nueva!</p>
            </Col>
          </Row>
        ) : (
          <Row className="g-4">
            {goals.map(goal => (
              <Col key={goal.id} md={6} lg={4} className="mb-3">
                <GoalCard 
                  goal={goal}
                  onDeleteGoal={handleDeleteGoal}
                  onAddTask={handleAddTask}
                  onDeleteTask={handleDeleteTask}
                  onToggleTask={handleToggleTask}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
