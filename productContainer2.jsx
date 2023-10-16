import React from "react";

function ProductContainer2(postToRender) {
  return (
    <div class="container-fluid" style={{ backgroundColor: "white" }}>
      <div class="row row-cols-2 row-cols-md-3 g-4">
        {postToRender.map((product) => (
          <div className="col">
            <div class="card bg-dark text-white" style={{ maxWidth: 1000 }}>
              <img
                src={product.primaryImage}
                class="card-img-top center-block"
                alt={product.title}
              />
              <div
                class="card-img-overlay d-flex flex-column justify-content-end"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                <h5 class="card-title">{product.artistDisplayName}</h5>
                <p class="card-text">{product.title}</p>
                <button
                  href="./#"
                  class="btn btn-dark"
                  style={{ maxWidth: 100 }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
function productCard(props) {
  return (
    <div className="col">
      <div class="card">
        <img src={props.primaryImage} class="card-img-top" alt={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.artistDisplayName}</h5>
          <p class="card-text">{props.title}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

function productCard(props) {
  return (
    <div className="col">
      <div class="card bg-dark text-white" style={{ maxWidth: 1000 }}>
        <img
          src={props.primaryImage}
          class="card-img-top center-block"
          alt={props.title}
        />
        <div
          class="card-img-overlay d-flex flex-column justify-content-end"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <h5 class="card-title">{props.artistDisplayName}</h5>
          <p class="card-text">{props.title}</p>
          <button href="./#" class="btn btn-dark" style={{ maxWidth: 100 }}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
*/
export default ProductContainer2;
