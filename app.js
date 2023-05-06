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
  , type :'breakfast',
  img : 'Assets/Recipe3.jpg'
}]


const recipeList = document.querySelector('.recipeList-container')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const dinner = document.querySelector('.dinner')



RecipeLists.map((e)=>{
  if (e.type === 'breakfast'){
    breakfast.style.borderBottom = '1px solid black'
    const newDiv = document.createElement('div')
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