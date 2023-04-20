import React from 'react';

const Register = () => {

  return (
    <div class="container mx-auto py-8">
        <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
        <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Matricula</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text" id="name" name="name" placeholder="012345678"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Correo</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email" id="email" name="email" placeholder="012345678@upq.edu.mx"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Contraseña</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password" id="password" name="password" placeholder="********"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirmar Contraseña</label>
            <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
        </div>
        <button
            class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit">Registrar</button>
        </form>
    </div>
  );
};

export default Register;