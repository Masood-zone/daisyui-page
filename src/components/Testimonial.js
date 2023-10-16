import React from "react";

const TESTIMONY_DATA = [
  {
    id: 1,
    name: "Desmond Adusei Kofi (ChipMunk)",
    avatar: "https://chipsoftgh.com/static/media/photo.d790d5a2.jpg",
    work: "Full-Stack developer",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, labore vitae error voluptatibus soluta, modi deleniti tempora similique sint quisquam suscipit. Eaque autem accusamus eum exercitationem iste aliquid amet.Eaque autem accusamus eum exercitationem iste aliquid amet.Eaque autem accusamus eum exercitationem iste aliquid amet.Eaque autem accusamus eum exercitationem iste aliquid amet.",
  },
  {
    id: 2,
    name: "Masood Acheampong",
    avatar:
      "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    work: "Frontend developer",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, labore vitae error voluptatibus soluta, modi deleniti tempora similique sint quisquam suscipit. Eaque autem accusamus eum exercitationem iste aliquid amet.",
  },
  {
    id: 3,
    name: "Samuel Freeman",
    avatar:
      "https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    work: "Backend developer",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, labore vitae error voluptatibus soluta, modi deleniti tempora similique sint quisquam suscipit. Eaque autem accusamus eum exercitationem iste aliquid amet.",
  },
  {
    id: 4,
    name: "Matin Abdul",
    avatar:
      "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    work: "Full-Stack developer",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, labore vitae error voluptatibus soluta, modi deleniti tempora similique sint quisquam suscipit. Eaque autem accusamus eum exercitationem iste aliquid amet.",
  },
  {
    id: 5,
    name: "Ellen Pinamang Agyei",
    avatar:
      "https://plus.unsplash.com/premium_photo-1678453147620-d4866d7562e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    work: "Frontend developer",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, labore vitae error voluptatibus soluta, modi deleniti tempora similique sint quisquam suscipit. Eaque autem accusamus eum exercitationem iste aliquid amet.",
  },
  {
    id: 6,
    name: "Stella Oppong",
    avatar:
      "https://media.istockphoto.com/id/1469706464/photo/concentrating-serious-and-night-with-woman-and-computer-for-software-engineering-developer.webp?b=1&s=170667a&w=0&k=20&c=WudstaWtRlB4WYAhzEcJWHjmzKjXbvgTNEHBtzQmZlg=",
    work: "Backend developer",
    notes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, labore vitae error voluptatibus soluta, modi deleniti tempora similique sint quisquam suscipit. Eaque autem accusamus eum exercitationem iste aliquid amet.",
  },
];

function Testimonial() {
  return (
    <section className="py-10 md:py-16 bg-neutral">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            We have some huge Fans
          </h2>
          <p className="text-lg sm:text-2xl mb-6 md:mb-14 ">
            These are what our influencers proclaim.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3  gap-6 lg:gap-8">
          <TestimonialCard testimonial={TESTIMONY_DATA} />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

function TestimonialCard({ testimonial }) {
  return testimonial.map((testimony) => {
    return (
      <div className="block mb-8 lg:mb-10">
        <div className="stack">
          <div
            className="card bg-secondary text-secondary-content"
            key={testimony.id}
          >
            <div className="card-body gap-4">
              <div className="flex items-center">
                <div className="avatar flex shrink-0">
                  <div className="w-16 rounded-full border-4 borderwhite">
                    <img src={testimony.avatar} alt="Avatar" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium leading-tight">
                    {testimony.name}
                  </p>
                  <small>{testimony.work}</small>
                </div>
              </div>
              <p>{testimony.notes}</p>
            </div>
          </div>
          <div className="card bg-primary h-10"></div>
          <div className="card bg-warning h-10"></div>
        </div>
      </div>
    );
  });
}
