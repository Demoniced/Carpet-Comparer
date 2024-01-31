document.querySelector('#beige').addEventListener('click',getBeige)
document.querySelector('#velvet').addEventListener('click',getVelvet)
document.querySelector('#black').addEventListener('click',getBlack)
document.querySelector('#green').addEventListener('click',getGreen)
document.querySelector('#orange').addEventListener('click',getOrange)
document.querySelector('#spotted').addEventListener('click',getSpotted)






function getBeige(){
    document.querySelector('body').style.backgroundImage = 'url(https://images.thdstatic.com/productImages/82f05ddd-0386-4cd5-9967-d59441066247/svn/artisan-hue-home-decorators-collection-texture-carpet-0714d-23-12-64_600.jpg)'
    document.querySelector('h1').style.color = 'black'
}
function getVelvet(){
    document.querySelector('body').style.backgroundImage = 'url(https://www.theperfectcarpet.com/sites/default/files/styles/collection_zoom/public/tpc/grand_velvet_burgundy_1.jpg?itok=XwDHiG2G)'
    document.querySelector('h1').style.color = 'white'
}
function getBlack(){
    document.querySelector('body').style.backgroundImage = 'url(https://images.thdstatic.com/productImages/1ff08a91-bc8a-4dbe-ad69-a93098c2a464/svn/beacon-trafficmaster-berber-carpet-h5213-3121-1200-64_300.jpg)'
    document.querySelector('h1').style.color = 'white'
}
function getGreen(){
    document.querySelector('body').style.backgroundImage = 'url(https://images.thdstatic.com/productImages/0e236e10-2f11-4a9d-9bae-a96986185dde/svn/ivy-green-trafficmaster-artificial-grass-t27-2701-1200-64_600.jpg)'
    document.querySelector('h1').style.color = 'white'
}
function getOrange(){
    document.querySelector('body').style.backgroundImage = 'url(https://media.istockphoto.com/id/468611778/photo/orange-carpet-background.jpg?s=612x612&w=0&k=20&c=yDHl1GmBZijNYvi5veag0ZLcLhQB1eSLKqdlfqoEjnE=)'
    document.querySelector('h1').style.color = 'white'
}
function getSpotted(){
    document.querySelector('body').style.backgroundImage = 'url(https://images.floorforce.com/Textures/18251/Carpet/33624156-8d57-45dc-a04e-c423ea91a108/Images/ANG43514351_500x500.jpg?vaumkp=image_url)'
    document.querySelector('h1').style.color = 'white'
}