export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export const PORTFOLIO_DATA = {
  name: "Sơn Lý Hồng Đức",
  nickname: "Bmass",
  title: "Senior Developer & Creative Architect",
  shortBio: "Xây dựng các sản phẩm kỹ thuật số đỉnh cao với sự chú trọng vào thẩm mỹ và hiệu năng.",
  about: "Với nhiều năm kinh nghiệm trong lĩnh vực phát triển phần mềm và thiết kế sáng tạo, tôi luôn nỗ lực tạo ra những sản phẩm không chỉ hoạt động hoàn hảo mà còn mang lại trải nghiệm thị giác tuyệt vời. Tôi tin rằng công nghệ là nghệ thuật của kỷ nguyên số.",
  skills: [
    { name: "Phát triển Fullstack", category: "Kỹ thuật" },
    { name: "Thiết kế UI/UX", category: "Thiết kế" },
    { name: "Hoạt ảnh 3D & WebGL", category: "Sáng tạo" },
    { name: "Kiến trúc hệ thống", category: "Kỹ thuật" },
    { name: "Tối ưu hóa hiệu năng", category: "Kỹ thuật" },
    { name: "Tư vấn giải pháp số", category: "Chiến lược" }
  ],
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/sonlyhongduc/", iconName: "Facebook" },
    { name: "Zalo", url: "https://zalo.me/0939262443", iconName: "MessageCircle" },
    { name: "GitHub", url: "https://github.com/duccodedao/", iconName: "Github" },
    { name: "Gmail", url: "mailto:sonlyhongduc@gmail.com", iconName: "Mail" },
    { name: "Website", url: "https://slhd.id.vn", iconName: "Globe" }
  ]
};
