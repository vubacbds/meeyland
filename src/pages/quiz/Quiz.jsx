import React from "react";
import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Meey Land là gì ?",
    children: (
      <div>
        Meey Land là doanh nghiệp khoa học công nghệ, phát triển các sản phẩm
        công nghệ ứng dụng trong Bất động sản, có trụ sở tại Hà Nội
      </div>
    ),
  },
  {
    key: "2",
    label: "Các sản phẩm của Meey Land ?",
    children: (
      <div>
        Meey Land đang phát Hệ sinh thái công nghệ gồm 26 sản phẩm riêng biệt bổ
        trợ nhau để giải quyết hầu hết các vấn đề trong Bất động sản. Một số sản
        phẩm đã ra mắt như:
        <ul style={{ marginLeft: "2rem" }}>
          <li>
            Cổng thông tin BĐS 4.0:
            <a href="https://meeyland.com"> meeyland.com</a>
          </li>
          <li>
            Nền tảng tra cứu quy hoạch:
            <a href="https://meeymap.com"> meeymap.com</a>
          </li>
          <li>
            Công cụ quản lý cho nhà môi giới:
            <a href="https://meeycrm.com"> meeycrm.com</a>
          </li>
          <li>
            Xem nhà 3D:
            <a href="https://meey3d.com"> meey3d.com</a>
          </li>
          <li>
            Định giá BĐS:
            <a href="https://meeyvalue.com"> meeyvalue.com</a>
          </li>
          <li>
            Chạy quảng cáo chuyên biệt BĐS:
            <a href="https://meeyads.com"> meeyads.com</a>
          </li>
          <li>
            Nền tảng tạo LandingPage BĐS:
            <a href="https://meeypage.com"> meeypage.com</a>
          </li>
          <li>
            Nền tảng MXH tin tức BĐS:
            <a href="https://meeyshare.com"> meeyshare.com</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "MEY là gì ?",
    children: (
      <div>
        MEY là đơn vị quy ước có thể hiểu là cổ phần nội bộ của Meey Land. Khi
        niêm yết trên sàn chứng khoán 1 MEY tương ứng = 1 cổ phiếu của Meey Land
      </div>
    ),
  },
  {
    key: "4",
    label: "Đầu tư là như thế nào ?",
    children: (
      <div>
        Nhà sáng lập Meey Land - doanh nhân Hoàng Mai Chung kêu gọi cộng đồng
        chung tay phát triển doanh nghiệp. Khi đầu tư bạn được sở hữu MEY - cổ
        phần nội bộ với giá ưu đãi
      </div>
    ),
  },
  {
    key: "5",
    label: "Giá MEY hiện tại và số tiền tôi cần phải đầu tư ?",
    children: (
      <div>
        Giá hiện tại 8,879đ /1MEY. Bạn có thể đầu tư với số vốn tối thiểu là
        11,650,000đ
      </div>
    ),
  },
  {
    key: "6",
    label: "Tôi được hưởng lợi gì ?",
    children: (
      <div>
        Khi doanh nghiệp thành công sẽ IPO đưa MEY (cổ phần nội bộ ) niêm yếu
        lên sàn chứng khoán. Bạn sẽ được 2 quyền lợi:
        <ul style={{ marginLeft: "2rem" }}>
          <li>
            Được sở hữu cổ phiếu tương ứng số MEY - bạn có thể bán cổ phiếu để
            nhận về giá trị tăng trưởng khổng lồ từ nó.
          </li>
          <li>
            Được nhận cổ tức hàng năm hoặc theo mỗi quý từ tiền lợi nhuận khổng
            lồ từ doanh nghiệp chia cho các cổ đông mà bạn không bị mất số cổ
            phiếu.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "7",
    label: "Tại sao đây là cơ hội lớn ?",
    children: (
      <div>
        Bạn được sở hữu cổ phần tương lai của doanh nghiệp có tiềm năng là doanh
        nghiệp tỷ đô, phát triển ra toàn cầu. Khi IPO giá trị cổ phiếu dự kiến
        đạt 230.000đ /1 cổ phiếu. <br />
        <p
          style={{
            margin: "1.2rem",
            textAlign: "justify",
            fontStyle: "italic",
          }}
        >
          Ví dụ bạn có 10.000 MEY (cổ phiếu) bạn sẽ có 230.000đ x 10.000 MEY =
          2,3 tỷ đồng
        </p>
        <p
          style={{
            margin: "1.2rem",
            textAlign: "justify",
            fontStyle: "italic",
          }}
        >
          Nếu doanh nghiệp trả cổ tức 5000đ /1 cổ phiếu hàng năm - bạn sẽ có
          5000đ x 10.000 MEY = 50 triệu đồng mỗi năm, đó là thu nhập thụ động
          ngay trong lúc bạn ngủ.
        </p>
      </div>
    ),
  },
  {
    key: "8",
    label: "Làm cách nào tôi có thể đầu tư ?",
    children: (
      <div>
        Đầu tiên, bạn cần mở 1 tài khoản online trên trang gọi vốn của Nhà sáng
        lập Hoàng Mai Chung tại đây: <br />
        <a
          style={{ color: "blue" }}
          href="https://id.hoangmaichung.com/register.html?ref=meeylander"
        >
          https://id.hoangmaichung.com/register.html?ref=meeylander
        </a>
        <br />
        Hãy dùng gmail và số điện thoại của bạn. Cuối cùng, bạn cần xác minh tài
        khoản, nạp tiền và tiến hành đầu tư.
      </div>
    ),
  },
  {
    key: "9",
    label: "Có an toàn không ?",
    children: (
      <div>
        Mọi thông tin của bạn sẽ được bảo mật. Mọi đóng góp của bạn sẽ lưu trữ
        an toàn trên hệ thống máy chủ và trên sổ sách của doanh nghiệp.
      </div>
    ),
  },
  {
    key: "10",
    label: "Thời gian trong bao lâu ?",
    children: (
      <div>
        Có 2 mốc thời gian bạn cần chú ý:
        <ul style={{ marginLeft: "2rem" }}>
          <li>
            Thời gian gọi vốn từ cộng đồng còn lại là từ 3 đến 6 tháng vì chuẩn
            bị nhận vốn từ Quỹ đầu tư
          </li>
          <li>
            Thời gian IPO đưa cổ phiếu lên sàn chứng khoán là dự kiến vào năm
            2025
            <p
              style={{
                fontSize: "1.3rem",
                fontStyle: "italic",
                margin: "1.2rem",
              }}
            >
              (Khi đó bạn có thể bán đi MEY (cổ phiếu) hoặc giữ lại nhận cổ tức
              hàng năm)
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "11",
    label: "Có chắc lên sàn IPO được không ?",
    children: (
      <div>
        Meey Land định hướng ngay từ khi ra đời là tiến tới IPO nên đã vạch rõ
        đường đi tới đó. Để thúc đẩy quá trình đó doanh nghiệp đã hợp tác với
        các đơn vị tư vấn lớn như:
        <ul style={{ marginLeft: "2rem" }}>
          <li> PwC - 1 trong 4 công ty kiểm toán hàng đầu thế giới</li>
          <li>BSI - viện tiêu chuẩn Anh</li>
          <li>
            Richard Moore Associates - tư vấn định vị thương hiệu cho Meey Land
          </li>
        </ul>
        Ngoài ra, có sự đồng hành từ Quỹ lớn từ Singapore - Alamat Capital vời
        dày dặn kinh nghiệm và mối quan hệ. Việc IPO chỉ còn sớm muộn.
      </div>
    ),
  },
  {
    key: "12",
    label: "Dự án có đáng tin không ?",
    children: (
      <div>
        Doanh nghiệp đi đúng đường lối chính sách của Đảng, nhà nước đề ra là
        chuyển đổi số, chính phủ số, kinh tế số...
        <br /> <br />
        Bên trong nội bộ doanh nghiệp có ban pháp chế đảm bảo doanh nghiệp vận
        hành đúng pháp luật, ngoài ra còn có các văn phòng luật sư hợp tác tư
        vấn. <br /> <br />
        Doanh nghiệp được sự ủng hộ lớn từ nhà nước bằng chứng qua các hợp tác
        với Viện Quy hoạch đô thị và nông thôn quốc gia, Gmobile thuộc Bộ CA.
        <br /> <br />
        Đặc biệt, sự kiện nhà sáng lập - Doanh nhân Hoàng Mai Chung trúng cử Uỷ
        viên ban chấp hành hiệp hội Bất động sản Việt Nam nhiệm kỳ V và thường
        xuyên được cơ quan báo đài đăng tin.
      </div>
    ),
  },
  {
    key: "13",
    label: "Có ai đầu tư chưa ?",
    children: <div>Tính đến hiện tai đã có hơn 45.000 nhà đầu tư</div>,
  },
  {
    key: "14",
    label: "Có tổng bao nhiêu MEY ?",
    children: (
      <div>
        Tổng 2,3 tỷ MEY phát hành cho gọi vốn cộng đồng 25% là 575 triệu MEY
      </div>
    ),
  },
  {
    key: "15",
    label: "Để có 1 tỷ trong tương lai tôi cần có bao nhiêu MEY ?",
    children: (
      <div>
        Nếu giá MEY đạt như dự kiến là 230.000đ trong tương lai thì bạn cần có
        tối thiểu 4348 MEY
      </div>
    ),
  },
];
const Quiz = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse
      items={items}
      defaultActiveKey={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
      onChange={onChange}
    />
  );
};
export default Quiz;
