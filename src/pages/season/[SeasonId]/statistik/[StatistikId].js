import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import html2canvas from 'html2canvas';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

function StatistikId() {
  const router = useRouter();
  const { SeasonId, StatistikId } = router.query;


  // const captureScreenshot = () => {
   

  //   // Capture the full page screenshot
  //   html2canvas(document.querySelector('#sss')).then(canvas => {
  //     // Convert the canvas to an image
  //     const screenshot = canvas.toDataURL('image/png');

  //     // Create a temporary link element to download the screenshot
  //     const link = document.createElement('a');
  //     link.href = screenshot;
  //     link.download = 'screenshot.png';

  //     // Trigger the download
  //     link.click();
  //   });
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);













  return (
    <div  className="font-nav bg-center overflow-x-scroll  overflow-y-hidden  text-slate-100 h-screen y  flex flex-col justify-center">
       <Link href={`/season/${SeasonId}/warday/${SeasonId}}`} className="fixed bottom-5 right-5" ><FontAwesomeIcon className="w-8 text-4xl bg-black/60 text-white" icon={faArrowCircleLeft}/></Link>
      <div  className="flex flex-row pt-5">
        <div className="Grup A bg-GrupA bg-cover bg-black flex flex-row">
          <div className="flex justify-center flex-col col1 mx-9">
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-1</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-2</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-3</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-4</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-5</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-6</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-7</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-8</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-col col2 mx-9">
            <div className="my-3">
              <div className="bg-stats-Qt border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-2</h1>
              </div>
              <div className="bg-stats-Qt border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-4</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-Qt border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-5</h1>
              </div>
              <div className="bg-stats-Qt border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-8</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-col col3 mx-9">
            <div className="my-3">
              <div className="bg-stats-Semi border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-2</h1>
              </div>
              <div className="bg-stats-Semi border bg-slate-950/60 h-14 w-56 my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-8</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="Vs">
          <div className="flex  bg h-screen  justify-start bg-cover flex-col col3 px-9">
            <div className="my-3 h-1/3 flex justify-around flex-col items-center">
              <h1 className="text-4xl font-nav">Zeeb Tournament</h1>
              <div className="border flex flex-col items-center justify-center  h-36 w-56 mx-2">
                <span>Winner!!</span>
                <div className="flex justify-center">
                  <img className="w-16" src="/Brosur logo ML.png" />
                  <h1>Zeeb Team-13</h1>
                </div>
              </div>
            </div>

            <div className="my-3  flex">
              <div className="bg-stats-Final border h-14 w-56 flex items-center  mx-2">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-2</h1>
              </div>
              <div className="bg-stats-Final border h-14 w-56 flex flex-row-reverse items-center mx-2">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-13</h1>
              </div>

            </div>
            <div className="w-full h-3/5 items-center flex justify-center">
              <img className="w-60" src="/grangger.png"/>
            </div>
          </div>
        </div>

        <div className="Grup B  flex bg-GrupB bg-cover flex-row-reverse">
          <div className="flex justify-center flex-col col1 mx-9">
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 flex-row-reverse my-4 flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-9</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-10</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-11</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-12</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-13</h1>
              </div>
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-14</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-knock border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-15</h1>
              </div>
              <div className="bg-stats-knock nborder bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-16</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-col col2 mx-9">
            <div className="my-3">
              <div className="bg-stats-Qt border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-9</h1>
              </div>
              <div className="bg-stats-Qt border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-12</h1>
              </div>
            </div>
            <div className="my-3">
              <div className="bg-stats-Qt border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-13</h1>
              </div>
              <div className="bg-stats-Qt border bg-slate-950/60  h-14 w-56 my-4 flex-row-reverse flex items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-15</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around flex-col col3 mx-9">
            <div className="my-3">
              <div className="bg-stats-Semi border bg-slate-950/60  h-14 w-56 my-4 flex flex-row-reverse items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1 className="line-through text-red-600">Zeeb Team-12</h1>
              </div>
              <div className="bg-stats-Semi border bg-slate-950/60  h-14 w-56 my-4 flex flex-row-reverse items-center">
                <img className="w-16" src="/Brosur logo ML.png" />
                <h1>Zeeb Team-13</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatistikId;
