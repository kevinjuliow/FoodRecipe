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
} ]


const recipeList = document.querySelector('.recipeList-container')



RecipeLists.map((e)=>{
  const newDiv = document.createElement('div')
  const img = document.createElement('img')
  img.setAttribute('src' , e.img)
  const newP = document.createElement('p')
  newP.innerHTML = e.name
  newDiv.append(img)
  newDiv.append(newP)
  recipeList.append(newDiv)
})