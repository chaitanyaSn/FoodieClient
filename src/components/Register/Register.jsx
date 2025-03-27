import React from 'react'

const Register = () => {
  return (
    <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-12">
            <div class="card shadow-lg">
                <div class="card-body">
                    <h3 class="card-title text-center mb-4">Register</h3>
                    <form id="loginForm">
                        <div class="mb-3">
                            <label for="username" class="form-label">Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="name" 
                                placeholder="Enter your name" 
                                required
                            />
                            <div class="form-text">Please enter your name.</div>
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">E-mail</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="email" 
                                placeholder="Enter your email" 
                                required
                            />
                            <div class="form-text">Please enter your email.</div>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="password" 
                                placeholder="Enter your password" 
                                required
                                minlength="6"
                            />
                            <div class="form-text">Password must be at least 6 characters long.</div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary btn-lg">Register</button>
                            <div id="formFeedback" class="mt-3"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register
