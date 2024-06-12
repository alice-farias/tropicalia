
      <div class="card-trtr">
          <div class="header-trtr">
              <div class="img-box-trtr">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      
                  </svg>
              </div>
              <span class="title-trtr">blusa que nao sei oq la
          </span></div>
      
          <div class="content-trtr">
              <p>
                  Lorem ipsum dolor sit tali amet, consectus uy
                  adipiscing it amet it...
              </p>
      
              <a class="btn-link-trtr">Comprar</a>
          </div>
      </div>






      
.card-trtr {
  width: 100%;
  height: 80%; /* Altura original */
  transition: height .5s, background .5s; /* Transição para altura e background */
  box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.11),
             -15px -15px 30px rgba(60, 60, 60, 0.082);
  text-align: center;
  overflow: hidden;
  grid-column: 2;
  grid-row: 4;
  background: linear-gradient(360deg, #edededc5 100%, hsla(0, 0%, 13%, 1) 70%);
}

.card-trtr:hover {
  height: 360px; /* Altura aumentada durante o hover */
  background: linear-gradient(360deg, #edededc5 100%, hsla(0, 0%, 13%, 1) 70%);
}
  
  .card-trtr:hover {
    height: 360px;
    background: linear-gradient(360deg, #edededc5 100%, hsla(0, 0%, 13%, 1) 70%);
  }
  
  .card-trtr .header-trtr {
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   background-image: url('../IMG/vale1.webp');
   background-size: cover;
    margin-bottom: 30px;
  }

  
  .card-trtr .header-trtr .img-box-trtr {
    width: 50px;
  }
  
  .card-trtr .header-trtr .title-trtr {
    font-size: 1em;
    letter-spacing: .1em;
    font-weight: 900;
    text-transform: uppercase;
    padding: 4px 0 14px 0;
    transition: all .5s;
    color: #edededc5;
  }
  
  
  .card-trtr:hover .card-trtr .header-trtr .title-trtr {
    padding: 0;
  }
  
  .card-trtr .content-trtr {
    display: block;
    text-align: left;
    color: #212121;
    margin: 0 18px;
  }
  
  .card-trtr .content-trtr p {
    transition: all .5s;
    font-size: .8em;
    margin-bottom: 8px;
  }
  
  .card-trtr .content-trtr a {
    color: #AA7448;
    cursor: pointer;
    transition: all .5s;
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .card-trtr .content-trtr .btn-link-trtr:hover {
    border-bottom: 1px solid #AA7448;
  }

  /* a */

  
  
  