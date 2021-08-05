import Link from 'next/link'

import RecipeListView from '../../components/RecipeListView'

const Recipes = ({ recipes }) => {
  console.log(recipes)
  return (
    <div>
      <h1>Recipes</h1>
      <input type='button' value='Create Recipe' />
      <ul>
        {recipes.map((recipe) => (
          <Link href={'/recipes/' + recipe.id} key={recipe.id}>
            <li>{recipe.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3001/recipes')
  const recipes = await res.json()
  return {
    props: {
      recipes,
    },
  }
}

export default Recipes
