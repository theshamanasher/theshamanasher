import moonWaterImg from "../../assets/img/moon-water.jpg";

const textBorderStyle: React.CSSProperties = {
    textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
    `,
  };
  
  
const ShamanBlessedMoonWater = () => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div 
        className="flex w-full justify-center py-64 sm:py-[120px] border-b-2 bg-cover bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(54, 153, 173, 0.8), rgba(0, 0, 0, 0.8)), url(${moonWaterImg})`,
        }}
      >
          <div className="flex flex-col items-center w-full max-w-[550px] px-4 md:px-16">
            <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light text-center" style={textBorderStyle}>
            Shaman Blessed Moon Water
            </h1>
            <p className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light" style={textBorderStyle}>
            A Sacred Elixir of Healing and Transformation
            </p>
          </div>
        </div>
        
        {/* Main Content Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-main-text text-lg space-y-[24px] mt-64 w-full max-w-[700px] mx-auto px-[16px]">
            {/* <h2 className="text-3xl font-light mb-8">Section Title</h2> */}
            <p>
            At the heart of my healing practice lies the power of the Moon, the ancient feminine energy that connects all things in cycles of renewal and transformation. My Shaman Blessed Moonwater can be customized to your exact desire of intentions, healing or manifestation. It is carefully crafted during the full moon, harnessing the potent energies of this sacred lunar phase. Each bottle is infused with intention, ritual, and the pure energy of the moon, creating an elixir that can help you cleanse, restore, and align your spirit.</p>
            <p>
            As a shaman, I offer this Moonwater to guide you through periods of emotional release, spiritual growth, and energetic healing. The water is charged under the full moon's powerful light, absorbing its healing vibrations and sacred wisdom. I then bless the water with ancient prayers and intentions to amplify its energy, ensuring it brings about transformation and protection in your life.
            </p>
            <p>
            The Shaman Blessed Moonwater can be used in a variety of ways—whether you’re seeking a spiritual cleansing, supporting meditation, or simply enhancing your energy field. Each drop is a reminder of the deep connection we share with the cycles of nature, and with the moon as our guide, this water will empower you to step forward into greater harmony and balance.
            </p>

            <h4 className="block text-2xl mt-[400px]">Benefits of Shaman Blessed Moonwater:</h4>
           
            <ul className="flex flex-col gap-4">
              <li className="list-disc ml-6">
                Cleansing & Purification: Removes negative energies, offering spiritual renewal.
              </li>

              <li className="list-disc ml-6">
              Emotional Healing: Assists in letting go of old wounds, making space for inner peace.
              </li>

              <li className="list-disc ml-6">
              Manifestation & Growth: Helps to align your desires with the natural flow of the universe, encouraging your intentions to manifest with clarity.
              </li>

              <li className="list-disc ml-6">
              Energetic Protection: Shields and fortifies your auric field, creating an energetic barrier against negativity.
              </li>
            </ul>

            <p>
            Experience the power of the full moon, brought directly to you through this sacred, shamanic blessing. Reach out to learn more or to receive your own bottle of Shaman Blessed Moonwater.
            </p>
          </div>
        </section>
      </div>
    );
  };
  
  export default ShamanBlessedMoonWater;