import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import '../styles/GoalForm.scss';

function GoalForm({ show, handleClose, handleAddGoal }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      handleAddGoal(formData);
      setFormData({
        name: '',
        description: '',
        dueDate: ''
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="goal-modal" centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>Agregar Nueva Meta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa el nombre de tu meta"
              className="form-control-custom"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe tu meta en detalle"
              className="form-control-custom"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Fecha Límite</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="form-control-custom"
            />
          </Form.Group>

          <div className="button-group">
            <Button 
              variant="secondary" 
              onClick={handleClose}
              className="cancel-btn"
            >
              Cancelar
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              className="submit-btn"
            >
              Crear Meta
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default GoalForm;
