import React from "react";
import "./style.scss";
import Slider from "react-slick";
import Doitac from "../../data/doitac";
import Giaithuong from "../../data/giaithuong";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Quiz from "../quiz";

const Home = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", color: "green" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true, //Rất hay để kéo tùy thích
    cssEase: "ease-in-out",
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // pauseOnHover: true,
    // nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="home">
      <p className="title">
        Đừng bỏ qua cơ hội đầu tư kiếm tiền ngay cả lúc bạn đang ngủ
      </p>
      <div className="home_box_1">
        <p>Thế giới có Uber – Grap cho ứng dụng gọi xe.</p>
        <p>Có mạng xã hội Facebook cho kết nối mọi người.</p>
        <p>Có Zalo cho thông tin liên lạc.</p>
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/img1.jpg"}
          alt="meey-land"
        />
        <p style={{ color: "red", fontWeight: "bold" }}>
          Chưa có ứng dụng công nghệ nền tảng cho bất động sản nào ?
        </p>
      </div>
      <div className="home_box_2">
        <p>
          Trong kỷ nguyên số này, nhu cầu về một ứng dụng công nghệ bất động sản
          toàn cầu có công nghệ 4.0 là điều tất yếu sớm muộn sẽ xảy ra
        </p>
        <p>Vấn Đề Ai Làm Và Quốc Gia Nào Làm Ra Nó Mà Thôi.</p>
      </div>

      <div className="home_box_3">
        <p className="title">Hệ sinh thái công nghệ bất động sản Meey Land</p>
        <img
          className="img2"
          src={process.env.PUBLIC_URL + "/images/img2.jpg"}
        />

        <div style={{ marginTop: "0.6rem" }}>
          <iframe
            src="https://www.youtube.com/embed/7gWuSxbVc04"
            allowFullScreen
            className="video"
          />
        </div>
        <p>
          Là mô hình kết hợp Công nghệ - Bất động sản - Tài chính tiên phong
          trên thế giới.
        </p>
        <p
          style={{
            fontSize: "1.3rem",
            textAlign: "left",
            fontStyle: "italic",
            marginBottom: "1.8rem",
          }}
        >
          <QuestionCircleOutlined /> Bạn có biết: Bí mật của các tỷ phú trên thế
          giới là sở hữu cổ phần của các doanh nghiệp.
        </p>
        <p className="title">Cơ hội hợp tác đầu tư </p>
        <div style={{ textAlign: "left", marginTop: "0.4rem" }}>
          <Quiz />
        </div>
      </div>

      <div className="home_box_4">
        <div style={{ marginTop: "1.3rem" }}>
          <p className="title">Bạn hãy xem hết video này 👇👇</p>

          <iframe
            src="https://www.youtube.com/embed/9-MB8EM0VQI"
            allowFullScreen
            className="video"
          />
        </div>
        <p className="title">TÍNH PHÁP LÝ CỦA DỰ ÁN</p>
        <div className="cacmuc"> Nhà sáng lập - CEO:</div>
        <img
          className="hmc"
          src={process.env.PUBLIC_URL + "/images/hmc.jpg"}
          alt="meey-land"
        />
        <br />
        <br />
        <div className="cacmuc">Giấy phép kinh doanh </div>
        <img
          className="gpkd"
          src={process.env.PUBLIC_URL + "/images/gpkd.jpeg"}
          alt="meey-land"
        />
        <br />
        <br />
        <div className="cacmuc">
          Chứng nhận doanh nghiệp KHCN - Doanh nghiệp được miễn giảm thuế trong
          nhiều năm
        </div>
        <img
          className="khcn"
          src={process.env.PUBLIC_URL + "/images/khcn.jpg"}
          alt="meey-land"
        />
        <div className="doitac">
          <div className="cacmuc">Các đối tác chiến lược </div>
          <Slider {...settings}>
            {Doitac?.map((item) => {
              return (
                <div className="div_img" key={item.id}>
                  <img className="img_slider" src={item.img} />
                  <a href={item.link}>{item.des}</a>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="doitac">
          <div className="cacmuc">Các giải thưởng </div>
          <Slider {...settings}>
            {Giaithuong?.map((item) => {
              return (
                <div className="div_img" key={item.id}>
                  <img className="img_slider" src={item.img} />
                  <a href={item.link}>{item.des}</a>
                </div>
              );
            })}
          </Slider>
        </div>
        <div style={{ marginTop: "1.3rem" }}>
          <div className="cacmuc">
            VTV2 đưa tin về Lễ ký kết hợp tác giữa Meey Land với Gtel Mobile và
            Gpay
          </div>
          <iframe
            src="https://www.youtube.com/embed/RecW4Qa_pbI"
            allowFullScreen
            className="video"
          />
        </div>
        <div style={{ marginTop: "1.3rem" }}>
          <div className="cacmuc">
            CEO Hoàng Mai Chung Chia Sẻ Về Số Hóa Bất Động Sản Tại Việt Nam
          </div>

          <iframe
            src="https://www.youtube.com/embed/ZtB32VsuAO8"
            allowFullScreen
            className="video"
          />
        </div>
        <div className="cacmuc">Sắp nhận vốn từ Quỹ đầu tư ngoại</div>
        <div className="img_box">
          <img
            className="quy"
            src={process.env.PUBLIC_URL + "/images/quy.jpg"}
            alt="meey-land"
          />
          <div className="click">
            <a href="https://diendandoanhnghiep.vn/lo-dien-chan-dung-quy-dau-tu-ngoai-chuan-bi-rot-von-vao-meey-land-248450.html">
              Đi tới bài báo
            </a>
          </div>
        </div>
        <b style={{ color: "red" }}>
          Chú ý: Chỉ còn 3-6 tháng vì đã ký kết với Quỹ đầu tư lớn tại Singapore
        </b>
      </div>
    </div>
  );
};

export default Home;
