//NavBar Events
const header = document.querySelector('header');
const ul = document.querySelector('header ul')
const navImg = document.querySelector('.navImg')
const hamburger = document.querySelector('.material-symbols-outlined')

window.addEventListener('scroll' , ()=>{
  header.classList.toggle('scrolled' , scrollY > 1)
  ul.classList.toggle('ulScrolled' , scrollY > 1)
  if (window.scrollY > 1) {
    navImg.src = "Assets/logo-white.png";
    hamburger.style.color = 'white'
  } else {
    navImg.src = "Assets/logo-black.png";
    hamburger.style.color = 'black'
  }
})


//Hamburger Menu
const navUl = document.querySelector('nav ul')
const xBtnNav = document.querySelector('.NavXBtn')


function handleResize() {
  if (window.innerWidth <= 576) {
    navUl.style.display = 'none';
  } else {
    navUl.style.display = 'flex';
  }
}

hamburger.addEventListener('click' , ()=>{
  navUl.style.display = 'flex'
})
xBtnNav.addEventListener('click' , ()=>{
    navUl.style.display = 'none'
})

window.addEventListener('resize', handleResize);






//Objects
const RecipeLists = [{
  name : 'Breakfast Sweet Potatoes',
  ingredients : '4 medium sweet potatoes , 1/2 cup fat-free coconut Greek yogurt , 1 medium apple, chopped , 2 tablespoons maple syrup , 1/4 cup toasted unsweetened coconut flakes',
  directions : 'Preheat oven to 400°. Place potatoes on a foil-lined baking sheet. Bake until tender, 45-60 minutes. With a sharp knife, cut an "X" in each potato. Fluff pulp with a fork. Top with remaining ingredients.'
  ,type : 'breakfast' 
  , img : 'Assets/Recipe1.jpg'
},{
  name : 'Fruity Waffle Parfaits',
  ingredients : '4 frozen low-fat multigrain waffles , 1/2 cup almond butter or creamy peanut butter, 2 cups strawberry yogurt , 2 large bananas, sliced , 2 cups sliced fresh strawberries',
  directions : 'Toast waffles according to package directions. Spread each waffle with 2 tablespoons almond butter. Cut waffles into bite-sized pieces. , Layer half the yogurt, bananas, strawberries and waffle pieces into 4 parfait glasses. Repeat layers. If desired, top with toasted almonds and maple syrup. Serve immediately.'
  ,type : 'breakfast' 
  , img : 'Assets/Recipe2.jpg'
} ,{
  name : 'Spanish Omelet',
  ingredients : '6 large eggs , 1/4 cup water , 1 cup refried beans, warmed , 1/4 cup chopped red onion , 1/2 cup shredded Mexican cheese blend, divided , 1/4 cup salsa'
  , 
  directions :'Heat a 10-in. skillet coated with cooking spray over medium heat. Whisk eggs and water. Add half of the egg mixture to skillet (mixture should set immediately at edges). , As eggs set, push cooked edges toward the center, letting uncooked portion flow underneath. When the eggs are set, spoon half of the beans and half of the onion on one side and sprinkle with 2 tablespoons cheese; fold other side over filling. Slide omelet onto a plate. Repeat. Garnish with salsa and remaining cheese.' ,
  type :'breakfast',
  img : 'Assets/Recipe3.jpg'
},{
  name : 'Cheeseburger Tacos',
  ingredients : '1 pound ground beef , 1 teaspoon onion powder, 1/2 teaspoon kosher salt , 1/4 teaspoon freshly ground pepper , 1 cup shredded cheddar cheese , 1/2 cup mayonnaise , 1/4 cup ketchup , 2 teaspoons dill or sweet pickle juice , 1/4 teaspoon hot pepper sauce , 8 flour tortillas (6 inches) , 1-1/4 cups shredded lettuce , 1 medium tomato, chopped , 1/4 cup chopped dill or sweet pickles'
  ,directions : 'In a large skillet, cook beef over medium heat, until no longer pink, 6-8 minutes, crumbling beef; drain. Stir in onion powder, salt and pepper. Sprinkle with cheese; cover and let stand until cheese is melted. , Meanwhile, in a small bowl, combine mayonnaise, ketchup, pickle juice and hot pepper sauce. Divide beef mixture between tortillas. Top with lettuce, tomato, pickles and sauce.', 
   type :'lunch',
  img : 'Assets/Recipe4.jpg'
}
,{
  name : 'Bratwurst Burgers with Braised Onions',
  ingredients : '1 tablespoon canola oil , 1 large onion, sliced , 1 medium sweet red pepper and yellow pepper sliced , 1 cup dark beer or chicken broth , 1/2 pound uncooked bratwurst links, casings removed , 1 large egg, lightly beaten , 1 tablespoon 2% milk , 3/4 cup seasoned bread crumbs , 4 hamburger buns, split and toasted , 4 slices Muenster cheese , 8 teaspoons spicy brown mustard , 1/2 pound ground beef'
  ,directions : 'In a large skillet, heat oil over medium heat. Add onion and peppers; cook and stir 5 minutes. Stir in beer. Bring to a boil. Reduce heat; simmer, uncovered, until vegetables are tender and liquid is almost evaporated, 15-20 minutes. Remove and keep warm. , In a small bowl, combine beef and bratwurst, mixing lightly but thoroughly. Shape into four 3/4-in.-thick patties.  , In a shallow bowl, mix egg and milk. Place bread crumbs in a separate shallow bowl. Dip patties in egg mixture, then roll in crumb mixture to coat. , In the same skillet over medium heat, cook burgers until a thermometer reads 160° for medium doneness and juices run clear, 3-4 minutes on each side; top with cheese during the last 1-2 minutes of cooking. Serve burgers on buns with mustard and onion mixture.', 
   type :'lunch',
  img : 'Assets/Recipe5.jpg'
}
,{
  name : 'Mozzarella Beef Roll-Ups',
  ingredients : '1 pound ground beef , 1 medium green pepper chopped , 1/3 cup chopped onion , 1 can (8 ounces) pizza sauce , 2 ounces sliced pepperoni (about 2/3 cup) , 1/2 teaspoon dried oregano , 6 flour tortillas (10 inches) warmed , 6 pieces string cheese (about 6 ounces)'
  ,directions : 'Preheat oven to 350°. In a large skillet, cook and crumble beef with pepper and onion over medium-high heat until no longer pink, 5-7 minutes; drain. Stir in pizza sauce, pepperoni and oregano. , Spoon 1/2 cup mixture across center of each tortilla; top with a piece of string cheese. Fold bottom and sides of tortilla over filling and roll up. , Place on an ungreased baking sheet, seam side down. Bake until heated through, about 10 minutes.', 
   type :'lunch',
  img : 'Assets/Recipe6.jpg'
} , {
  name : 'Sweet-and-Sour Meatballs' ,
  ingredients : '1 can (20 ounces) unsweetened pineapple chunks , 1 package (12 ounces) frozen fully cooked homestyle or Swedish meatballs thawed , 1 large green pepper cut into 1-inch pieces , 3 tablespoons cornstarch , 1/3 cup cold water , 3 tablespoons cider vinegar , 1 tablespoon soy sauce , 1/2 cup packed brown sugar' 
  ,directions : 'Drain pineapple, reserving juice. Set pineapple aside. Add enough water to juice if needed to measure 1 cup. In a large skillet over medium heat, cook the meatballs, green pepper and juice mixture until heated through. , In a small bowl, combine the cornstarch, cold water, vinegar and soy sauce until smooth. Add brown sugar and reserved pineapple to the pan; stir in cornstarch mixture. Bring to a boil; cook and stir until thickened, about 2 minutes. If desired, serve with rice and top with green onions.' ,
  type :'dinner' ,
  img :'Assets/Recipe7.jpg'
} , {
  name : 'Air-Fryer Chicken Parmesan' ,
  ingredients : '2 large eggs ,1/2 cup seasoned bread crumbs , 1/3 cup grated Parmesan cheese , 1/4 teaspoon pepper , 4 boneless skinless chicken breast halves (6 ounces each) , 1 cup pasta sauce , 1 cup shredded mozzarella cheese ' 
  ,directions : 'Preheat air fryer to 375°. In a shallow bowl, lightly beat eggs. In another shallow bowl, combine bread crumbs, Parmesan cheese and pepper. Dip chicken in egg, then coat with crumb mixture. ,Place chicken in a single layer on greased tray in air-fryer basket. Cook until a thermometer reads 165°, 10-12 minutes, turning halfway through. Top chicken with sauce and mozzarella. Cook until cheese is melted, 3-4 minutes longer. If desired, sprinkle with chopped basil and additional Parmesan cheese and serve with pasta. ' ,
  type :'dinner' ,
  img :'Assets/Recipe8.jpg'
} , {
  name : 'Garlic Lime Salmon' ,
  ingredients : '1/2 cup canola oil , 1 medium onion, finely chopped , 1 teaspoon grated lime zest , 2 tablespoons lime juice , 1 garlic clove, minced , 2 salmon fillets (about 1-1/2 pounds each)' 
  ,directions : 'Preheat broiler. In a small bowl, mix the first 5 ingredients. Place salmon fillets on a broiler pan, skin side down. Broil 4-6 in. from heat until fish just begins to flake easily with a fork, 15-20 minutes. Brush frequently with onion mixture during the last 5 minutes of cooking.' ,
  type :'dinner' ,
  img :'Assets/Recipe9.jpg'
}]


const recipeListContainer = document.querySelector('.recipeList-container')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const dinner = document.querySelector('.dinner')

//function to handle the click Events on each div element recipes
const handleClick = (e) =>{
  const article = document.createElement('article')
        const h4 = document.createElement('h4')
        const ingredient = document.createElement('p')
        const directions = document.createElement('p')

        h4.innerHTML = e.name 
        ingredient.innerHTML = "ingredients : "+e.ingredients
        directions.innerHTML = 'Directions : '+e.directions

        article.append(h4)
        article.append(ingredient)
        article.append(directions)
        article.classList.add('recipes')
        recipeListContainer.append(article)

        const xBtn = document.createElement('h1')
        xBtn.innerHTML = "X"
        xBtn.classList.add('recipe-xBtn')
        article.append(xBtn)

        xBtn.addEventListener('click' , ()=>{
          article.remove()
        })
}
function displayBreakfastRecipes() {
  while (recipeListContainer.firstChild){
    recipeListContainer.removeChild(recipeListContainer.firstChild)
  }
  RecipeLists.map((e)=>{
    if (e.type === 'breakfast'){
      const newDiv = document.createElement('div')
      lunch.style.borderBottom = 'none'
      dinner.style.borderBottom = 'none'
      breakfast.style.borderBottom = '1px solid black'
      const img = document.createElement('img')
      const newP = document.createElement('p')
      img.innerHTML = e.img
      img.setAttribute('src', e.img)
      newP.innerHTML = e.name
      img.style.width = '100%'
      img.style.borderRadius = '10px'
      newP.style.textAlign = 'center'
      newDiv.append(img)
      newDiv.append(newP)
      recipeListContainer.append(newDiv)
      newDiv.style.cursor = 'pointer'
      newDiv.classList.add('gridRecipeContainer')

      newDiv.addEventListener('click', ()=>{
        handleClick(e)
      })
    }
  })
  
}
displayBreakfastRecipes()
breakfast.addEventListener('click', displayBreakfastRecipes);



function displayLunchRecipes() {
  while (recipeListContainer.firstChild){
    recipeListContainer.removeChild(recipeListContainer.firstChild)
  }
  RecipeLists.map((e)=>{
    if (e.type === 'lunch'){
      const newDiv = document.createElement('div')
      breakfast.style.borderBottom = 'none'
      dinner.style.borderBottom = 'none'
      lunch.style.borderBottom = '1px solid black'
      const img = document.createElement('img')
      const newP = document.createElement('p')
      img.innerHTML = e.img
      img.setAttribute('src', e.img)
      newP.innerHTML = e.name
      img.style.width = '100%'
      img.style.borderRadius = '10px'
      newP.style.textAlign = 'center'
      newDiv.append(img)
      newDiv.append(newP)
      recipeListContainer.append(newDiv)
      newDiv.style.cursor = 'pointer'
      newDiv.classList.add('gridRecipeContainer')

      newDiv.addEventListener('click', ()=>{
        handleClick(e)
      })
    }
  })

}

lunch.addEventListener('click', displayLunchRecipes)

function displayDinnerRecipes() {
  while (recipeListContainer.firstChild){
    recipeListContainer.removeChild(recipeListContainer.firstChild)
  }
  RecipeLists.map((e)=>{
    if (e.type === 'dinner'){
      const newDiv = document.createElement('div')
      breakfast.style.borderBottom = 'none'
      lunch.style.borderBottom = 'none'
      dinner.style.borderBottom = '1px solid black'
      const img = document.createElement('img')
      const newP = document.createElement('p')
      img.innerHTML = e.img
      img.setAttribute('src', e.img)
      newP.innerHTML = e.name
      img.style.width = '100%'
      img.style.borderRadius = '10px'
      newP.style.textAlign = 'center'
      newDiv.append(img)
      newDiv.append(newP)
      recipeListContainer.append(newDiv)
      newDiv.style.cursor = 'pointer'
      newDiv.classList.add('gridRecipeContainer')

      newDiv.addEventListener('click', ()=>{
        handleClick(e)
      })
    }
  })

}

dinner.addEventListener('click', displayDinnerRecipes)