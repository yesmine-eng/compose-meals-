import './Components/css/bootstrap.min.css'
import './Components/css/style.css'
import './Components/css/responsive.css'
import './Components/css/custom.css'
import img1 from './images/fish.jpg'
import img2 from './images/beefmeat.jpg'
import img3 from './images/eggs.jpg'
import img11 from './images/Betrave.jpg'
import img12 from './images/peas.jpg'
import img13 from './images/potatos.jpg'
import img21 from './images/pasta.jpg'
import img22 from './images/borghel.jpg'
import img23 from './images/riz.jpg'


const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    console.log("drag started")
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
  })
})

function Composer() {
  return (
  <div>
    <div class="all-page-title page-breadcrumb">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-12">
            <h1>Special Menu</h1>
          </div>
        </div>
      </div>
    </div>
  
     <div class="menu-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-title text-center">
              <h2>Compose your meal</h2>
              <p>Choose one ingredient of each section if wanted</p>
            </div>
          </div>
        </div>
        
        <div class="row inner-menu-box">
          <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" href="#v-pills-home" id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
						<a class="nav-link" href="#v-pills-profile" id="v-pills-profile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false">Protein</a>
						<a class="nav-link" href="#v-pills-messages" id="v-pills-messages-tab" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false">Vegetables</a>
						<a class="nav-link" href="#v-pills-settings" id="v-pills-settings-tab" data-toggle="pill" role="tab" aria-controls="v-pills-settings" aria-selected="false">Starches</a>
            </div>
          </div>
          
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div class="row">
                  <div class="col-lg-4 col-md-6 special-grid drinks">
                    <div class="gallery-single fix" class="draggable" draggable="true" >
                      <img src={img1} class="img-fluid" alt="Image"></img>
                        <div class="why-text">
                        <h4>Fish</h4>
                        <p>Rich in omega-3, vitamins(D and B2), calcium, phosphorus,minerals
                          (iron,zinc,iodine,magnesium,and potassium).</p>
                        <h5>14DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid drinks">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img2} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Beef</h4>
                        <p>Rich in protein, choline, fat,conjugated linoleic acid, iron, zinc, vitamin (B6,B12,D), phosphorus, magnesium and potassium. 
                          </p>
                        <h5>28DT</h5>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid drinks">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img3} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Eggs</h4>
                        <p>Rich in high-quality protein,fat,saturated fat, iron, vitamins, minerals, and carotenoids. </p>
                        <h5> 7DT </h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid lunch">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img11} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Beet</h4>
                        <p> Rich in calcium, iron and vitamins A and C. 
                        Excellent source of folic acid, fibre, manganese and potassium.</p>
                        <h5>1.8DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid lunch">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img12} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Peas</h4>
                        <p>Rich in Vitamins(A, K, and C), fiber, thiamin and folate, protein</p>
                        <h5>3DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid lunch">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img13} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Potatos</h4>
                        <p>Cooked, rich in vitamin C , potassium, primarly carbs, protein and fiber.</p>
                        <h5>1.2DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid dinner">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img21} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Pasta</h4>
                        <p>Rich in carbs, Iron. with small amount of calcium, potassium and fat</p>
                        <h5>0.8DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid dinner">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img22} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Groats</h4>
                        <p>Rich in potassium, fiber, protein, magnesium, vitamin B6, calcium, and Zinc. </p>
                        <h5>4DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid dinner">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img23} class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Rice</h4>
                        <p>Rich in carbs, Iron. with small amount of calcium, potassium, fat and protein</p>
                        <h5>2.5DT</h5>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="tab-pane fade" id='v-pills-profile' role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <div class="row">
                  <div class="col-lg-4 col-md-6 special-grid drinks">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img1}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                      <h4>Fish</h4>
                      <p>Rich in omega-3, vitamins(D and B2), calcium, phosphorus,minerals
                          (iron,zinc,iodine,magnesium,and potassium).</p>
                        <h5>14DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid drinks">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img2}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                      <h4>Beef</h4>
                        <p>Rich in protein, choline, fat,conjugated linoleic acid, iron, zinc, vitamin (B6,B12,D), phosphorus, magnesium and potassium. 
                          </p>
                        <h5>28DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid drinks">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img3}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                      <h4>Eggs</h4>
                        <p>Rich in high-quality protein,fat,saturated fat, iron, vitamins, minerals, and carotenoids. </p>
                        <h5> 7DT </h5>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div class="row">
                  <div class="col-lg-4 col-md-6 special-grid lunch">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img11}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Beet</h4>
                        <p>Rich in calcium, iron and vitamins A and C. 
                        Excellent source of folic acid, fibre, manganese and potassium.</p>
                        <h5> 1.8DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid lunch">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img12}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Peas</h4>
                        <p>Rich in Vitamins(A, K, and C), fiber, thiamin and folate, protein</p>
                        <h5>3DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid lunch">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img13}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Potatos</h4>
                        <p>Cooked, rich in vitamin C , potassium, primarly carbs, protein and fiber.</p>
                        <h5>1.2DT</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div class="row">
                  <div class="col-lg-4 col-md-6 special-grid dinner">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img21}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Pasta</h4>
                        <p>Rich in carbs, Iron. with small amount of calcium, potassium and fat</p>
                        <h5>0.8DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid dinner">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img22}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Groats</h4>
                        <p>Rich in potassium, fiber, protein, magnesium, vitamin B6, calcium, and Zinc.</p>
                        <h5>4DT</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4 col-md-6 special-grid dinner">
                    <div class="gallery-single fix" class="draggable" draggable="true">
                      <img src={img23}  class="img-fluid" alt="Image"></img>
                      <div class="why-text">
                        <h4>Rice</h4>
                        <p>Rich in carbs, Iron. with small amount of calcium, potassium, fat and protein</p>
                        <h5>2.5DT</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
  <footer class="footer-area bg-f">
		<div class="container">
			<div class="row center">
				<div class="col-lg-3 col-md-6">
					<h3>About Us</h3>
					<p></p>
				</div>
				<div class="col-lg-3 col-md-6">
					<h3>Subscribe</h3>
					<div class="subscribe_form">
						<form class="subscribe_form">
							<input name="EMAIL" id="subs-email" class="form_input" placeholder="Email Address..." type="email"></input>
							<button type="submit" class="submit">SUBSCRIBE</button>
							<div class="clearfix"></div>
						</form>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<h3>Opening hours</h3>
					<p><span class="text-color"></span></p>
					<p><span class="text-color"></span> </p>
					<p><span class="text-color"></span></p>
					<p><span class="text-color"></span></p>
				</div>
			</div>
		</div>
	</footer>
</div>
  );
}

export default Composer;
