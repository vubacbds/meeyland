import React from "react";
import "./style.scss";
import Slider from "react-slick";
import Doitac from "../../data/doitac";
import Giaithuong from "../../data/giaithuong";

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
    speed: 250,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true, //Rất hay để kéo tùy thích
    cssEase: "ease-in-out",
    // fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    // nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="home">
      <h3 className="home_title">ĐỪNG BỎ QUA NẾU NHƯ BẠN CHƯA TÌM HIỂU HẾT</h3>
      <div className="home_box_1">
        <p>Thế giới có Uber – Grap cho ứng dụng gọi xe.</p>
        <p>Có mạng xã hội Facebook cho kết nối mọi người.</p>
        <p>Có Zalo cho thông tin liên lạc.</p>
        <img
          className="img1"
          src={process.env.PUBLIC_URL + "/images/img1.jpg"}
          alt="meey-land"
        />
        <p style={{ color: "red" }}>
          Chưa có ứng dụng công nghệ nền tảng cho bất động sản nào ?
        </p>
        <div style={{ textAlign: "left" }}>
          Phần lớn những trang website hiện tại trên thế giới đang ở trong tình
          trạng:
          <ul style={{ marginLeft: "2.4rem" }}>
            <li>Do người làm công nghệ thông tin phát triển lên.</li>
            <li>Do người làm nghề môi giới bất động sản tự thuê phát triển.</li>
          </ul>
          <p>
            Chúng ta – MEEY LAND – có 2 trong 1 – Vừa làm nghề công nghệ thông
            tin – vừa làm nghề môi giới bất động sản chuyên nghiệp phát triển
            lên. Mặt khác vừa là một nhà quản trị doanh nghiệp và tài chính giàu
            kinh nghiệm.
          </p>
        </div>
        <h3 style={{ marginTop: "1.3rem" }}>VẤN ĐỀ THỊ TRƯỜNG BỎ NGỎ</h3>
        <ul style={{ textAlign: "left", marginLeft: "2rem" }}>
          <li>Công nghệ lạc hậu 1.0 -2.0</li>
          <li>Thiếu hiểu biết về trải nghiệm người dùng.</li>
          <li>
            Giá trị chuyên môn nghiệp vụ bất động sản cung cấp cho người dùng bị
            sai.
          </li>
        </ul>
      </div>
      <div className="home_box_2">
        <p>
          Trong kỷ nguyên số này, nhu cầu về một ứng dụng công nghệ bất động sản
          toàn cầu có công nghệ 4.0 là điều tất yếu sớm muộn sẽ xảy ra
        </p>
        <p>Vấn Đề Ai Làm Và Quốc Gia Nào Làm Ra Nó Mà Thôi.</p>
      </div>

      <div className="home_box_3">
        <h3>HỆ SINH THÁI CÔNG NGHỆ BẤT ĐỘNG SẢN MEEY LAND</h3>
        <img
          className="img2"
          src={process.env.PUBLIC_URL + "/images/img2.png"}
        />
        <div style={{ textAlign: "left", marginTop: "0.4rem" }}>
          <p>Là mô hình kết hợp CÔNG NGHỆ – BẤT ĐỘNG SẢN – TÀI CHÍNH</p>
          <p>
            Cung cấp dịch vụ tìm kiếm và chia sẻ thông tin bất động sản tới
            người có nhu cầu một cách tự động. Với tiêu chí: “Nhanh – đơn giản –
            Rẻ”
          </p>
          <img
            className="img3"
            src={process.env.PUBLIC_URL + "/images/img3.jpg"}
          />
          <p>
            Ứng dụng các công nghệ 4.0 mới nhất: AI - Bigdata - Blockchain - AR,
            VR...
          </p>
          <p>
            Đối tượng: Chính chủ, Nhà môi giới, Sàn bất động sản, Chủ đầu tư,
            Nhà đầu tư, Ngân hàng.
          </p>
          <p>Thị trường: Việt Nam và Toàn cầu.</p>
          <div style={{ marginTop: "1.3rem" }}>
            <h4>
              10 phút nắm trọn thông tin về Dự án HST Công nghệ Bất động sản
              Meey Land
            </h4>

            <iframe
              src="https://www.youtube.com/embed/5it6CPCpHtA"
              allowFullScreen
              className="video"
            />
          </div>
          <h3 style={{ marginTop: "1.3rem" }}>
            TRỜ THÀNH CỔ ĐÔNG CÙNG MEEY LAND
          </h3>
          <p>
            Chúng tôi luôn sẵn lòng hợp tác với tất cả các bạn. Hãy góp sức cùng
            chúng tôi xây dựng lên một Nền tảng công nghệ bất động sản Toàn cầu
            mang thương hiệu Việt. Sản phẩm là một tài sản vô cùng có giá trị
            cho người dùng. Hãy cùng tôi đem Trí tuệ Việt đi khắp thế gian này.
            Để cả thế giới sẽ phải ngưỡng mộ về óc sáng tạo của người Việt Nam.
          </p>
          <h3>Lợi ích khi đầu tư:</h3>
          <ul style={{ marginLeft: "2rem" }}>
            <li>Bạn sẽ được sở hữu cổ phần với giá gốc</li>

            <li>Được hưởng cổ tức/lợi tức khi doanh nghiệp có lợi nhuận</li>
            <li>Được tặng token tương ứng số cổ phần</li>
            <li>
              Được nhận 5% giá trị hợp tác để sử dụng các sản phẩm trong hệ sinh
              thái
            </li>
          </ul>
          <h4 style={{ marginTop: "0.4rem" }}>
            Tổng phát hành: 2.3 tỷ MEY (cổ phần). Kêu gọi vốn 25% là 575 triệu.
          </h4>
          <h4 style={{ color: "red" }}>Hiện tại giá: 8679đ/cp</h4>
          <p>Vốn đầu tư tối thiểu: 500$ (11.650.000đ)</p>
          <p>Thời gian gọi vốn còn lại: 3-6 tháng</p>
          <p>
            Thời gian IPO đưa cổ phiếu lần đầu lên sàn chứng khoán SEHK Hong
            Kong: 2025
          </p>
          <p> Giá dự kiến đạt được: 10$ (230.000đ/cp) </p>

          <div className="example">
            <p>Ví dụ bạn đầu tư vào đây 12 triệu đồng</p>
            <p>Số cổ phần bạn sẽ nhận được là: 12.000.000 / 8.679 = 1382 cp</p>
            <p>
              Khi IPO thành công bạn sẽ được: 1382 x 230.000đ = 318 triệu đồng
            </p>
            <p>
              ( Nếu bạn không bán cp đi, bạn giữ lại sẽ được nhận cổ tức khi
              doanh nghiệp làm ăn có lãi chia cho cổ đông )
            </p>
          </div>
          <div style={{ marginTop: "1.8rem" }}>
            <h4>Các thương vụ IPO thành công đã chứng minh: </h4>
            <ol style={{ marginLeft: "2rem" }}>
              <li>
                Uber đã ipo thành công 45$/1cp. 👉Nếu như bạn có 100.000cp ×
                (45$×23k)= bạn có hơn 103 tỷ.
              </li>
              <li>
                Zalo mục tiêu ipo 40$ nhưng đã đạt tới 80$ ngoài cả sự mong đợi.
                👉Nếu như bạn sở hữu 100.000cp × (80$×23k) = bạn có 184 tỷ
              </li>
              <li>
                Lyft đã thành công ở mức 72$. 👉Nếu bạn sở hữu 100.000cp ×
                (72$×23k) = bạn có hơn 165,6 tỷ.
              </li>
              <li>
                ZOOM chào sàn 36$ nhưng hiện tại 99$/1 cp 👉Nếu bạn sở hữu
                100.000cp x (99$x 23k) =227,7 tỷ
              </li>
            </ol>
            <p>
              💥Những cơ hội trên đã trôi qua 👉Và giờ là MEEY LAND - công nghệ
              Bđs 4.0 🔜Hãy chờ đón điều thần kì. Cơ hội không gõ cửa hai lần,
              hãy tranh thủ nắm bắt.
            </p>
            <p>
              Link đăng ký miễn phí tài khoản đầu tư: <br />
              <a
                style={{ color: "blue" }}
                href="https://id.hoangmaichung.com/register.html?ref=meeylander"
              >
                https://id.hoangmaichung.com/register.html?ref=meeylander
              </a>
            </p>
            <p>
              Tìm hiểu chi tiết hơn:
              <a
                style={{ color: "blue" }}
                href="https://id.hoangmaichung.com/landing/meeylander"
              >
                Tại đây
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="home_box_4">
        <h3>TÍNH PHÁP LÝ CỦA DỰ ÁN</h3> <br />
        <h5> Nhà sáng lập - CEO:</h5>
        <img
          className="hmc"
          src={process.env.PUBLIC_URL + "/images/hmc.jpg"}
          alt="meey-land"
        />
        <br />
        <br />
        <h5>Giấy phép kinh doanh: </h5>
        <img
          className="gpkd"
          src={process.env.PUBLIC_URL + "/images/gpkd.jpeg"}
          alt="meey-land"
        />
        <br />
        <br />
        <h5>
          Chứng nhận doanh nghiệp KHCN - Doanh nghiệp được miễn giảm thuế trong
          nhiều năm
        </h5>
        <img
          className="khcn"
          src={process.env.PUBLIC_URL + "/images/khcn.jpg"}
          alt="meey-land"
        />
        <div className="doitac">
          <h4>Các đối tác chiến lược: </h4>
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
          <h4>Các giải thưởng: </h4>
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
          <h5>
            VTV2 đưa tin về Lễ ký kết hợp tác giữa Meey Land với Gtel Mobile và
            Gpay
          </h5>
          <iframe
            src="https://www.youtube.com/embed/RecW4Qa_pbI"
            allowFullScreen
            className="video"
          />
        </div>
        <div style={{ marginTop: "1.3rem" }}>
          <h5>
            CEO Hoàng Mai Chung Chia Sẻ Về Số Hóa Bất Động Sản Tại Việt Nam
          </h5>

          <iframe
            src="https://www.youtube.com/embed/ZtB32VsuAO8"
            allowFullScreen
            className="video"
          />
        </div>
        <b style={{ color: "red" }}>
          Chú ý: Chỉ còn 3-6 tháng vì đã ký kết với Quỹ đầu tư lớn tại Singapore
        </b>
      </div>
    </div>
  );
};

export default Home;
