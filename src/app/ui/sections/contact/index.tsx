import dynamic from "next/dynamic";
import EmailForm from "../../components/email/EmailForm";
import FancyBackground from "../FancyBackground";
import Email from "../../components/email";

const Map = dynamic(() => import("../../components/Map"), {
  loading: () => <div>Loading...</div>,
});

const Contact = ({ id }: { id: string }) => {
  return (
    <section id={id} className="min-h-svh w-screen section-violet-bg">
      <FancyBackground>
        <div className="mx-auto w-screen py-24 sm:py-40 lg:py-50 md:px-12 flex md:gap-20 gap-10 flex-col come-in">
          <div className="flex gap-8 flex-col text-white come-in">
            <h1 className="text-5xl font-bold text-center">Contacto</h1>
          </div>
          <div className="block">
            <div className="flex flex-wrap-reverse items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div className="h-[500px] w-full">
                  <Map />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                          >
                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Teléfono de contacto
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          099 634 437
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          2201 6524
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                          >
                            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Localización
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          Gral Enrique Martínez 1311
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            data-name="1-Email"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="white"
                            className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                          >
                            <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Email</p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          compudata@compudata.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          jamar2006@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Email />
          </div>
        </div>
      </FancyBackground>
    </section>
  );
};

export default Contact;
