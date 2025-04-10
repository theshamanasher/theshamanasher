import chakaAlignmentImg from "../../assets/img/chakra-alignment.jpg";

const textBorderStyle: React.CSSProperties = {
  textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
    `,
};

const ChakraAlignment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div
        className="flex w-full justify-center py-64 sm:py-[120px] border-b-2 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(106, 98, 136, 0.38), rgba(0, 0, 0, 0.8)), url(${chakaAlignmentImg})`,
        }}
      >
        <div className="flex flex-col items-center w-full max-w-[550px] px-4 md:px-16">
          <h1
            className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light text-center"
            style={textBorderStyle}
          >
            Chakra Alignment
          </h1>
          <p
            className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light"
            style={textBorderStyle}
          >
            Balancing Your Energy Centers for Harmony and Well-Being
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-main-text text-lg space-y-[24px] mt-64 w-full max-w-[700px] mx-auto px-[16px]">
          <p>
            Our physical, emotional, and spiritual well-being is deeply
            intertwined with the flow of energy within us. The Chakra Alignment
            service offers a powerful, holistic approach to restoring balance
            within your body's seven energy centers—your chakras. 
          </p>

          <p>
          These spinning
            wheels of energy, which has been scientifically proven to connect to
            nerve centers within your body, govern various aspects of your life,
            from your sense of safety and self-worth to your emotional health
            and spiritual connection. When one or more of these chakras becomes
            blocked or imbalanced, it can manifest in physical discomfort,
            emotional distress, or a feeling of disconnect from your true self.
          </p>
          <p>
            As a shamanic healer, I work with the ancient wisdom of the chakras,
            using sacred tools and techniques to help realign and cleanse your
            energy centers. Through a combination of intuitive healing,
            frequency healing, breathwork, guided meditation, crystal therapy,
            and energy work, I facilitate a deep recalibration of your energetic
            system. The results are profound.
          </p>

          <div className="flex flex-col">
            <h4 className="block text-2xl  mt-[32px]">
              Benefits of Chakra Alignment:
            </h4>

            <ul className="flex flex-col gap-4">
              <li className="list-disc ml-6">
              Restores Balance: Brings harmony to your energy centers, promoting overall well-being.
              </li>

              <li className="list-disc ml-6">
              Emotional Healing: Clears emotional blockages, helping to release fears, trauma, and stress.
              </li>

              <li className="list-disc ml-6">
              Increased Vitality: Enhances the flow of life energy, revitalizing the body and mind.
              </li>

              <li className="list-disc ml-6">
              Spiritual Clarity: Deepens your connection to your higher self and your purpose in life.
              </li>

              <li className="list-disc ml-6">
              Physical Healing: Alleviates physical symptoms that may be connected to energy imbalances, such as fatigue, headaches, or digestive issues; chronic pain and recent injuries can also be remedied.
              </li>
            </ul>
          </div>

          <p className="mt-12">
            Experience the power of the full moon, brought directly to you
            through this sacred, shamanic blessing. Reach out to learn more or
            to receive your own bottle of Shaman Blessed Moonwater.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChakraAlignment;
