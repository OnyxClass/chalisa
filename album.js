new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "anakku/chalis1.jpg",
            img2: "anakku/chalis2.jpg",
            img3: "anakku/chalis3.jpg",
            title: "HAPPY BIRTHDAY",
            isOpen: false,
          },
          {
            img1: "anakku/chalis4.jpg",
            img2: "anakku/chalis5.jpg",
            img3: "anakku/chalis6.jpg",
            title: "SAYANG CHALISA ;)",
            isOpen: false,
          },
          {
            img1: "anakku/chalis7.jpg",
            img2: "anakku/chalis8.jpg",
            img3: "anakku/chalis9.jpg",
            title: "PAPA PUNG SAYANG :)",
            isOpen: false,
          },
          {
            img1: "anakku/chalis10.jpg",
            img2: "anakku/chalis11.jpg",
            img3: "anakku/chalis12.jpg",
            title: "CHALISA TITAHENA",
            isOpen: false,
          },
          {
            img1: "anakku/chalis13.jpg",
            img2: "anakku/chalis14.jpg",
            img3: "anakku/chalis15.jpg",
            title: "PANJANG UMUR",
            isOpen: false,
          },
          {
            img1: "anakku/chalis16.jpg",
            img2: "anakku/chalis17.jpg",
            img3: "anakku/chalis18.jpg",
            title: "HAPPY BIRTHDAY CANTIK",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });