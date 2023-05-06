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
}]


const recipeList = document.querySelector('.recipeList-container')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const dinner = document.querySelector('.dinner')



RecipeLists.map((e)=>{
  if (e.type === 'breakfast'){
    const newDiv = document.createElement('div')
    breakfast.style.borderBottom = '1px solid black'
    const img = document.createElement('img')
    img.setAttribute('src' , e.img)
    const newP = document.createElement('p')
    newP.innerHTML = e.name
    img.style.width = '100%'
    img.style.borderRadius = '10px'
    newP.style.textAlign = 'center'
    newDiv.append(img)
    newDiv.append(newP)
    recipeList.append(newDiv)
  }
})