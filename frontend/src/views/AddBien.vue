<template>
  <div class="container">
    <h1>Ajouter un Bien</h1>
    <div class="container mt-5">
    
    
      <form>
      <button type="submit" class="mb-5 btn btn-outline btn-lg nice-btn-outline">
          Ajouter une photo
        </button>
        <div class="mb-3">
          <input
            placeholder="Adresse"
            type="text"
            class="form-control form-control-lg nice-input"
            id="adresse"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Surface (m²)"
            type="text"
            class="form-control form-control-lg nice-input"
            id="surface"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Loyer mensuel hors charges"
            type="email"
            class="form-control form-control-lg nice-input"
            id="loyer"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Classe énergétique"
            type="text"
            class="form-control form-control-lg nice-input"
            id="classe_ene"
            required
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Equipement"
            type="text"
            class="form-control form-control-lg nice-input"
            id="equipement"
            required
          />
        </div>
        <button type="submit" class="btn btn-block btn-lg nice-btn">
          ENREGISTRER
        </button>
      </form>
    </div>
  </div>
</template>

