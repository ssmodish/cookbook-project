export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/recipes')
  const data = await res.json()

  const paths = data.map((recipe) => {
    return {
      params: { id: recipe.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('http://localhost:3001/recipes/' + id)
  const data = await res.json()

  return {
    props: { recipe: data },
  }
}

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h1>Recipe Page</h1>
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      {recipe.ingredients &&
        recipe.ingredients.map((ingredient, index) => (
          <p key={index} className='pt-2'>
            {ingredient}
          </p>
        ))}
      <h3>Instructions</h3>
      {recipe.instructions &&
        recipe.instructions.map((instruction, index) => (
          <p key={index} className='pt-2'>
            {instruction}
          </p>
        ))}
    </div>
  )
}

export default Recipe
