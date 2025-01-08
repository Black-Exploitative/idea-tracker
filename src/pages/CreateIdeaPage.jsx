import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateIdeaPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    priorityLevel: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        // Simulate form submission to an API (replace with actual API call)
        try {
            // You can replace this with an actual POST request to your backend
            // Example:
            // await fetch('/api/ideas', { method: 'POST', body: formData });

            setSuccessMessage('Idea created successfully!');
            setFormData({
                title: '',
                category: '',
                description: '',
                priorityLevel: '',
            });
            setErrors({});
        } catch {
            setErrors({ submit: 'There was an error submitting your idea.' });
        }
    }
};


  const validateForm = (data) => {
    let errors = {};
    if (!data.title) errors.title = 'Title is required.';
    if (!data.category) errors.category = 'Category is required.';
    if (!data.description) errors.description = 'Description is required.';
    if (!data.priorityLevel || data.priorityLevel < 1 || data.priorityLevel > 5)
      errors.priorityLevel = 'Priority level must be between 1 and 5.';
    return errors;
  };

  return (
    <div className="container mt-5">
      <h2>Create New Idea</h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}

      <form onSubmit={handleSubmit} className="idea-form">
        {/* Title Field */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>

        {/* Category Field */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          >
            <option value="">Select Category</option>
            <option value="Writing">Writing</option>
            <option value="Art">Art</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Education">Education</option>
          </select>
          {errors.category && <div className="invalid-feedback">{errors.category}</div>}
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          ></textarea>
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>

        {/* Priority Level Field */}
        <div className="form-group">
          <label htmlFor="priorityLevel">Priority Level (1-5)</label>
          <input
            type="number"
            name="priorityLevel"
            id="priorityLevel"
            min="1"
            max="5"
            value={formData.priorityLevel}
            onChange={handleChange}
            className={`form-control ${errors.priorityLevel ? 'is-invalid' : ''}`}
          />
          {errors.priorityLevel && <div className="invalid-feedback">{errors.priorityLevel}</div>}
        </div>

        <button type="submit" className="btn btn-primary mt-5">Create Idea</button>
      </form>
    </div>
  );
}

export default CreateIdeaPage;
