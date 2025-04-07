import smudgeImg from '../../assets/img/smudge.jpg'; 


const textBorderStyle: React.CSSProperties = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000
  `,
};



const CleansingAndProtection = () => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div 
        className="flex w-full justify-center py-64 sm:py-[120px] border-b-2 bg-cover bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${smudgeImg})`,
        }}
      >
          <div className="flex flex-col items-center w-full max-w-[550px] px-4 md:px-16">
            <h1 className="mt-8 text-[#aabcbf] text-4xl md:text-6xl font-light text-center" style={textBorderStyle}>
            Smudging - Cleansing Renewing Protecting
            </h1>
            <p className="text-base text-[#aabcbf] mt-16 sm:mt-32 text-center leading-relaxed font-light" style={textBorderStyle}>
            Clearing Negative Energy and Restoring Sacred Space
            </p>
          </div>
        </div>
        
        {/* Main Content Section */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-main-text text-lg space-y-[24px] mt-64 w-full max-w-[700px] mx-auto px-[16px]">
            <p>
            As a shamanic healer, I offer Smudging ceremonies designed to restore balance to your environment and energy field. Whether you are seeking to purify your home, office, or personal energy, I will guide the sacred smoke through your space or aura, setting the intention to release anything that no longer serves your highest good.
            </p>

            <h4 className="block text-2xl mt-[400px]">Benefits of Smudging:</h4>
           
            <ul className="flex flex-col gap-4">
              <li className="list-disc ml-6">
              Cleansing Negative Energy: Removes built-up emotional or energetic imprints, creating a fresh, clean environment.
              </li>

              <li className="list-disc ml-6">
              Restoring Balance: Helps realign the energy in your space or body, bringing you into harmony.
              </li>

              <li className="list-disc ml-6">
              Protection: Creates a shield of positive energy that guards against harmful influences or negativity.
              </li>

              <li className="list-disc ml-6">
              Spiritual Renewal: Invites peace, clarity, and connection to higher consciousness.
              </li>

              <li className="list-disc ml-6">
              Emotional Release: Clears stress, anxiety, or lingering emotions, creating space for calm and positivity.
              </li>
            </ul>

            <p>
            Each Smudging ceremony is personalized to meet your specific needs. I will call upon the spirits of the sacred herbs and set clear intentions for healing and purification. Whether you are moving into a new home, clearing an office space, or simply seeking to release emotional blockages within yourself, Smudging will create an atmosphere of renewal and energetic flow.
            </p>

            <p>
              This ritual must be done in person, and can also include the use of crystals, the closing of energetic gateways, and sacred prayers to further amplify the cleansing process. Allow the smoke to carry away what is no longer needed, leaving only the pure, positive energy that supports your highest path.
            </p>

          </div>
        </section>
      </div>
    );
  };
  
  export default CleansingAndProtection;