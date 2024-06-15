function CategoriaSelect( { onCategoriaChange } ) {

    const handleCategoriaChange = (selectedCategoria) => {
        onCategoriaChange(selectedCategoria.target.value);
    }

  return (
      <select className="form-select form-select-sm" onChange={handleCategoriaChange}>
          <option selected value={'verbo'}>Verbos</option>
          <option value={'adjetivo'}>Adjetivos</option>
          <option value={'substantivo'}>Substantivos</option>
          <option value={'saudacao'}>Saudações</option>
          <option value={'pronome'}>Pronome</option>
          <option value={'familia'}>Família</option>
          <option value={'outros'}>Outros</option>
      </select>
  )
}

export default CategoriaSelect;