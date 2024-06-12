import { ResumenDocument } from "../ResumenDocument/ResumenDocument";
import "./DocumentosDetail.css";
import React, { useRef } from "react";

export function DocumentosDetail() {

  const contentDocument = useRef(null)

  console.log(contentDocument.current);
  
  return (
    <div className="document-container-all openResum" ref={contentDocument}>
      <div className="document-content-bg">
        <div className="document-main-content">
          <div className="title-document">
            <h3>Mr. Gustavo Cerati</h3>
            <p>El mejor Artista y Compositor Musical</p>
          </div>
          <div className="title-document">
            <h3>Disquera RCA Records</h3>
            <p>Addres, Numbrer Street Name Omaga</p>
          </div>
          <div className="parraf-document">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              velit aperiam quisquam voluptates odio in rerum repudiandae deleniti
              eveniet necessitatibus, architecto nostrum sunt magni ad maiores
              unde cum! Explicabo quas sapiente odio veniam possimus, nisi
              dignissimos magnam sit illum quod iusto tenetur quam rerum expedita
              eaque voluptatem eos, dolores recusandae suscipit deleniti mollitia
              ad unde. Ullam, voluptas possimus. Alias accusantium officia ut
              similique itaque, repellendus possimus error! Nam sit obcaecati ipsa
              incidunt laudantium, enim adipisci, cupiditate voluptatibus quae
              sapiente perspiciatis molestias eveniet eum tempore impedit in iste
              sed! Amet, dignissimos. Illo voluptatum numquam sequi sed
              architecto? Blanditiis rerum culpa velit dolorem, repellat autem id,
              numquam expedita nihil nesciunt dolore! Non voluptate rem eligendi
              quisquam ab vel esse sunt officia velit nihil consequatur id
              doloremque perspiciatis, consectetur veritatis ipsum temporibus modi
              earum, error distinctio, repellat tempore nemo sit aut. Totam,
              deserunt?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
              ipsam magni aut tenetur. Atque obcaecati nesciunt aliquid quia
              officiis nisi eius, iste a quae est quas et quidem id, consequuntur
              illo fugiat suscipit amet porro culpa architecto minima illum
              eveniet perspiciatis. Quos maiores dolorum odio illum sint quasi
              natus quaerat veniam animi ea voluptas facere neque cumque ad iusto
              nobis incidunt consectetur nesciunt aperiam ab, quae vel quam.
              Sapiente accusamus, corrupti a perspiciatis fugit neque officiis!
              Assumenda nisi labore nesciunt sapiente nulla, odio dolor molestiae
              doloribus, saepe excepturi mollitia ipsa necessitatibus quasi
              aliquid, corrupti voluptates hic ipsam ex quibusdam consequatur
              recusandae. Nostrum tempore libero alias, voluptatem doloribus
              mollitia molestiae officiis quaerat optio, aperiam recusandae autem
              laudantium animi pariatur voluptates in vitae sed doloremque sequi.
              Reprehenderit illum sapiente corporis fugit, itaque ipsam! Beatae
              nihil voluptatum iusto fuga rerum ipsa corrupti ad.
            </p>
          </div>
          <div className="info-document">
            <div className="contac-document">
              <div>
                <p>Numero 1</p>
                <p>Numero 2</p>
              </div>
              <div>
                <p>Adress, Number Street</p>
                <p>Name Street City</p>
              </div>
              <div>
                <p>construred@gmail.com</p>
                <p>askconstrured@gmail.com</p>
              </div>
            </div>
            <div>Firma</div>
          </div>
        </div>
      </div>
      <ResumenDocument/>
    </div>
  );
}
