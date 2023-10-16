import React, { useState, useEffect } from "react";
import productContainer2 from "./productContainer2";
import PhotoContainer from "./photoContainer";
import ProductContainer2 from "./productContainer2";
import { get } from "jquery";

const testEndpoint =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=True&isPublicDomain=True&medium=Paintings&q=Landscape";
const eachEndpoint =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

function Content3() {
  const [IDs, setIDs] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [hasLoaded, setHasLoaded] = useState();
  const holdingPhotos = [];
  const postsPerPage = 15;

  async function getPhoto(endPoint) {
    const res = await fetch(endPoint);
    const photoBlob = await res.json();
    return photoBlob.objectIDs;
  }

  async function getPhotoList() {
    const idl = await getID();
    console.log(idl);
    let i = 0;
    let j = (count - 1) * postsPerPage;
    while (i < postsPerPage) {
      if (idl[j] === undefined) {
        console.log("break");
        break;
      }
      const res = await fetch(eachEndpoint + idl[j++]);
      if (res.status === 200) {
        const photoBlob = await res.json();
        if (photoBlob.primaryImageSmall) {
          holdingPhotos.push(photoBlob);
          console.log(j);
          i++;
        }
      }
    }
    setPhotos(holdingPhotos);
  }

  const handleShowMore = () => {
    setCount((prevCount) => prevCount + 1);

    getPhotoList();
  };
  async function getID() {
    const res = await fetch(testEndpoint);
    const IDblob = await res.json();
    return IDblob.objectIDs;
  }

  useEffect(() => {
    setHasLoaded(true);
    console.log(IDs);
    getPhotoList();
  }, []);

  /*
  render() {
    return (
      <section className="content">
        <p>Content</p>
        <PhotoContainer photos={this.state.photos} />
      </section>
    );
  }
  */

  //Content-fuild or Content-Lg

  return hasLoaded ? (
    <section>
      <h2>New Content</h2>
      {ProductContainer2(photos)}
      <div>
        <button onClick={handleShowMore} className="btn btn-dark">
          Show More
        </button>
      </div>
    </section>
  ) : (
    <div>Loading...</div>
  );
}

export default Content3;
