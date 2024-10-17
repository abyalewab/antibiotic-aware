import { Accordion, AccordionTab } from "primereact/accordion";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { useState } from "react";
import AW from "/src/assets/Logo.jpg";
import "./faq.css";

export const FAQ = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
    console.log("show more: ", !showMore);
  };

  return (
    <div className="faq-container">
      <div style={{ width: "50%", margin: "5rem" }}>
        <div className="faq-title">Frequently Asked Questions - FAQ</div>
        <Accordion className="w-full">
          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  What are antibiotics?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              Antibiotics are a type of medicine that kills or stops the growth
              of bacteria. Some examples of antibiotics include penicillin and
              ciprofloxacin.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  What does it mean when bacteria are resistant to antibiotics?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              Antibiotic resistance is the ability of bacteria to resist the
              effects of antibiotics. Infections caused by resistant bacteria
              can be very difficult to treat.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  What are “Superbugs”?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              “Superbugs” are bacteria that have become resistant to multiple
              antibiotics typically used to treat them.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  How does antibiotic resistance happen?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              When exposed to antibiotics, bacteria can develop ways to escape
              their effects. Because bacteria are able to adapt, we should be
              careful about how we use antibiotics. Using antibiotics when they
              are not necessary might mean that they will not work when really
              needed. A common misunderstanding is that a PERSON becomes
              resistant to an antibiotic. Really, it is the BACTERIA that are
              resistant to treatment.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  Is antibiotic resistance an important issue?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              Yes! In the United States, about 2.8 million illnesses and 35,000
              deaths are caused by antibiotic-resistant infections each year.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  What role does antibiotic use play in driving increasing rates
                  of antibiotic resistance?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              Antibiotic use is a significant factor driving increasing rates of
              antibiotic resistance because when exposed to antibiotics,
              bacteria can develop resistance characteristics to escape their
              effects. Antibiotics can also reduce the number of bacteria that
              are not resistant, allowing more space for resistant bacteria to
              multiply and spread.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  What is antibiotic stewardship?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              Antibiotic stewardship is the process of improving how we use
              antibiotics while effectively treating infections. Eliminating
              unnecessary antibiotic use can help ensure that antibiotics will
              work when they are really needed.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  Why is it important to take antibiotics exactly as prescribed?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              Even if you are feeling better and symptoms have improved, that
              does not always mean the infection is completely gone. If you stop
              taking the antibiotic prescription too soon, all of the bacteria
              causing the infection might not be killed. You might become sick
              again, and the remaining bacteria might become resistant to the
              antibiotic you’ve taken.
            </p>
          </AccordionTab>

          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <Avatar image={AW} shape="circle" />
                <span className="font-bold white-space-nowrap">
                  Do antibiotics help with the common cold or flu?
                </span>
              </span>
            }
            className="mb-3"
          >
            <p className="m-2">
              No! Antibiotics only work for bacterial infections. The common
              cold and flu are caused by viruses, so antibiotics will not work.
              Antibiotics do not work for some common respiratory infections,
              including most cases of bronchitis, many sinus infections, and
              some ear infections.
            </p>
          </AccordionTab>

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How does your health care provider determine if an infection
                    is resistant?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                A sample is taken from a sick person or animal and sent to a
                laboratory. At the laboratory, the sample is tested to see if
                there are bacteria present and to determine which antibiotics
                might work to treat the infection.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How can I prevent infections with resistant bacteria?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Prevent infections, including those caused by resistant
                bacteria, by hand washing, vaccination, and food safety. Cover
                your cough, and stay home when you are feeling ill.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    Are there any downsides to taking antibiotics?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Yes. There are potential downsides to taking antibiotics,
                including increased risk of another type of bacterial infection
                (“C. diff”), allergic reactions (including potentially deadly
                allergic reaction called anaphylaxis), diarrhea, harmful effects
                on the kidneys and liver, and even nausea and upset stomach.
                This is why it is important that antibiotics are used only when
                needed.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How do vaccines help prevent antibiotic resistance?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Many routine vaccines prevent bacterial infections. If a person
                does not get infected in the first place, there is no need to
                treat with antibiotics.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How are healthcare-associated infections and antibiotic
                    resistance related?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Healthcare-associated infections are often caused by
                antibiotic-resistant bacteria, but not always. Two examples of
                resistant infections include
                methicillin-resistant Staphylococcus aureus (MRSA) and
                carbapenem-resistant Enterobacteriaceae (CRE).
                Antibiotic-resistant infections can also cause infections in the
                community.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    Can I throw my unused medications in the trash or down the
                    toilet/drain?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                No! Medications and other chemicals end up in our natural
                environment, including lakes and streams, because they leak out
                of landfills and septic systems. Do not throw unused medications
                in the trash. Do not flush unused medications down the toilet or
                sink drain. You can bring unused medications to a take-back box
                at a law enforcement office or pharmacy in your area.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    Do pets get infections that need to be treated with
                    antibiotics?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Yes. Pets can get infections just like people, and sometimes
                they are resistant to antibiotics typically used to treat them.
                As in health care, using antibiotics appropriately in veterinary
                medicine is important to prevent resistant infections.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How do we keep our milk and meat safe from antibiotics?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                When an animal being raised for meat or milk is treated with
                antibiotics, farmers follow federal guidelines on how long they
                must keep that animal’s products out of the food supply. Milk
                and meat also undergo federal and/or state testing to ensure it
                meets antibiotic safety guidelines.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    Why are antibiotics used for animals?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Just like people, animals sometimes get infections that need to
                be treated with antibiotics. Both pets and animals raised for
                food can become sick with respiratory, gastrointestinal,
                reproductive, and other bacterial infections. Veterinarians are
                responsible for prescribing antibiotics if necessary, and for
                choosing them appropriately.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How do people get infections with bacteria from animals?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                People can be exposed to bacteria by handling or eating raw or
                undercooked milk or meat, by touching or caring for animals, or
                by coming into contact with stool or contaminated bedding from
                animals.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    How should I dispose of unused medications from people and
                    my animals?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Take unused medications to a collection box. These collection
                sites do not charge any disposal fees. They accept all medicines
                from households, including prescription, over-the-counter, and
                pet medicines. These collection boxes are found at pharmacies
                and law enforcement facilities. If a collection site is not
                available, incineration at a permitted Waste-to-Energy facility
                is the best method for destruction. If you know your garbage
                goes into an incinerator, you can safely dispose of medications
                through that route. If your garbage goes to a landfill, the
                better option is to purchase a mail-back envelope from your
                local pharmacy.
              </p>
            </AccordionTab>
          )}

          {showMore && (
            <AccordionTab
              header={
                <span className="flex align-items-center gap-2 w-full">
                  <Avatar image={AW} shape="circle" />
                  <span className="font-bold white-space-nowrap">
                    Can hand sanitizer help fix the problem of antibiotic
                    resistance?
                  </span>
                </span>
              }
              className="mb-3"
            >
              <p className="m-2">
                Yes. Although antibiotic resistance is a big challenge with many
                contributing causes, infection prevention is an important part
                of the solution. Keeping hands clean, including with hand
                sanitizer, is an important way to prevent infections in
                individual people. We will use less antibiotics and have less
                antibiotic resistance if people do not get sick in the first
                place!
              </p>
            </AccordionTab>
          )}
        </Accordion>

        <Button
          label={showMore ? "SHOW LESS" : "SHOW MORE"}
          onClick={toggleShowMore}
          style={{width: "12rem"}}
          rounded
        />
      </div>
    </div>
  );
};
