import AdminLayout from "../layout/admin/AdminLayout";

import image_1 from "../../assets/img/admin/imageRuler.png";
import image_2 from "../../assets/img/admin/nodesRuler.png";
import image_3 from "../../assets/img/admin/nodesRuler_2.png";

function RulerDetail() {
    return ( 
        <AdminLayout>
        <section>
          <div className="content adminRuler">
            <div className="content__header">
              <div className="content__header--title">
                <span className="content__header--title-text">Rule Detail</span>
              </div>
            </div>
            <div className="content__body">
              <div className="content__body--group">
                <div className="content__body--group-heading">
                  <div className="heading1 heading">
                    <span>Heading1</span>
                  </div>
                  <div className="heading2 heading">
                    <span>Heading2</span>
                  </div>
                  <div className="heading3 heading">
                    <span>Heading3</span>
                  </div>
                  <div className="heading1 heading">
                    <span>Heading1</span>
                  </div>
                </div>
  
                <div className="content-text">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                    lobortis nisl cursus bibendum sit nulla accumsan sodales
                    ornare. At urna viverra non suspendisse neque, lorem. Pretium
                    condimentum pellentesque gravida id etiam sit sed arcu
                    euismod. Rhoncus proin orci duis scelerisque molestie cursus
                    tincidunt aliquam.
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                    lobortis nisl cursus bibendum sit nulla accumsan sodales
                    ornare. At urna viverra non suspendisse neque, lorem. Pretium
                    condimentum pellentesque gravida id etiam sit sed arcu
                    euismod. Rhoncus proin orci duis scelerisque molestie cursus
                    tincidunt aliquam.
                  </span>
                </div>
                <div className="content__imgRuler">
                  <img src={image_1} alt="" className="content__imgRuler--img" />
                  <div className="content__imgRuler--text">
                    <a
                      href=""
                      className="content__imgRuler--text-link content-text"
                    >
                      Link text reuse anchor component
                    </a>
                  </div>
                </div>
  
                <div className="content__hr"></div>
                <div className="content-text">
                  <ul>
                    <li>unordered list item</li>
                    <li>
                      unordered list itemunordered list itemunordered list
                      itemunordered list itemunordered list itemunordered list
                      itemunordered list itemunordered list item
                    </li>
                    <li>unordered list item</li>
                  </ul>
                </div>
                <div className="content__body--group-heading">
                  <div className="heading1 heading">
                    <span>Heading1</span>
                  </div>
                  <div className="heading2 heading">
                    <span>Heading2</span>
                  </div>
                  <div className="heading3 heading">
                    <span>Heading3</span>
                  </div>
                </div>
  
                <div className="content-text">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                    lobortis nisl cursus bibendum sit nulla accumsan sodales
                    ornare. At urna viverra non suspendisse neque, lorem. Pretium
                    condimentum pellentesque gravida id etiam sit sed arcu
                    euismod. Rhoncus proin orci duis scelerisque molestie cursus
                    tincidunt aliquam.
                  </span>
                </div>
  
                <div className="content__imgRuler">
                  <img src={image_2} alt="" className="content__imgRuler--img" />
                </div>
  
                <div className="content-text">
                  <ol>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                    <li>ordered list item</li>
                  </ol>
                </div>
  
                <div className="content__imgRuler">
                  <img src={image_3} alt="" className="content__imgRuler--img" />
                </div>
  
                <div className="content-text content-text-nothing">
                  <span>Nothing is impossible, the word itself says “I’m possible!”</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminLayout>
     );
}

export default RulerDetail;