import HeroImage from "@/public/HeroImage.png";

const dataHero = {
  heading: " تو خونتون از کاری که دوسش داری درآمـــــــــد داشته باش!",
  description: "ثبت نام کن تا رئیس خودت باشی و هروقت میخوای پول در بیاری!",
  button: "بزن بریم",
  form: {
    phone: {
      name: "شماره همراه",
      errors: [
        "عدد الزامی است",
        "شماره باید حداقل ۱۱ رقم باشد",
        "شماره همراه اشتباه است",
      ],
    },
  },
  heroImage: { ...HeroImage, alt: "تصویر یوک زن در حال آشپزی" },
};

export default dataHero;
