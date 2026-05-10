import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Signup Successful!');
      console.log(formData);

      // Form reset
      setFormData({
        name: '',
        email: '',
        password: ''
      });

      // Errors clear
      setErrors({});
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Signup Form</h1>

      <div className="inputs">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInput}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInput}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInput}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;