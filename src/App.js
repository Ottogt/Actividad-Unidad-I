import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import Header from './components/Header';
import GoalCard from './components/GoalCard';

function App() {
  const [goals, setGoals] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: ''
  });
  const [showMobileModal, setShowMobileModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      const newGoal = {
        id: Date.now(),
        ...formData,
        createdAt: new Date()
      };
      setGoals([...goals, newGoal]);
      setFormData({
        name: '',
        description: '',
        dueDate: ''
      });
      setShowMobileModal(false);
    }
  };

  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="content-row">
          {/* FORMULARIO - Lado Izquierdo */}
          <div className="form-section">
            <div className="form-wrapper">
              <Form onSubmit={handleAddGoal} className="goal-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit"
                  className="add-goal-btn"
                >
                  Add Goal
                </Button>
              </Form>
            </div>
          </div>

          {/* METAS - Lado Derecho */}
          <div className="goals-section">
            {goals.length === 0 ? (
              <div className="no-goals">
                <p>No tienes metas registradas. ¡Crea una nueva!</p>
              </div>
            ) : (
              <div className="goals-list">
                {goals.map(goal => (
                  <GoalCard 
                    key={goal.id}
                    goal={goal}
                    onDeleteGoal={handleDeleteGoal}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botón para Mobile */}
        <div className="mobile-add-btn">
          <Button 
            className="add-goal-mobile-btn"
            onClick={() => setShowMobileModal(true)}
          >
            + ADD GOAL
          </Button>
        </div>

        {/* Modal para Mobile */}
        <Modal show={showMobileModal} onHide={() => setShowMobileModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Nueva Meta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowMobileModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleAddGoal}>
              Crear Meta
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
