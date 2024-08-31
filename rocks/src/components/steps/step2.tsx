import { useGameScore, useGameStepStore, useMoveStore } from "@/store";
import { match } from "ts-pattern";
import { Paper, Rock, Scissors } from "../icons";
import {
  useGetComputerMove,
  useGetGameResult,
  useRandomlySetComputerMove,
} from "@/hooks";
import React from "react";
import { Button } from "../ui/button";
import clsx from "clsx";
import { Loader } from "../loader";
import { useMutationState } from "@tanstack/react-query";

export const Step2 = () => {
  const [move, resetMove] = useMoveStore((state) => [
    state.move,
    state.resetMove,
  ]);
  const [incPlayer, incComputer] = useGameScore((state) => [
    state.incPlayerScore,
    state.incComputerScore,
  ]);
  const [resetStep] = useGameStepStore((state) => [state.resetStep]);

  const computer = useRandomlySetComputerMove();
  const final_data = useMutationState({
    filters: {
      mutationKey: ["finalize_game_results"],
    },
    select: (mutation) => mutation.state.data,
  });
  const final = final_data[final_data.length - 1];
  const computerMove = useGetComputerMove({
    deps1: computer?.data?.hash,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deps2: (final as any)?.hash,
  });
  const winner = useGetGameResult({
    deps1: computerMove?.data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deps2: (final as any)?.hash,
  });
  console.log("comp move", computerMove);
  console.log("winner -", winner);
  console.log("final", final);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      computer.mutate();
    }, 3000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (winner.isSuccess && !winner.isLoading) {
      setTimeout(() => {
        match(winner.data)
          .with(1, () => {
            incPlayer();
            incComputer();
          })
          .with(2, () => {
            incPlayer();
          })
          .with(3, () => {
            incComputer();
          })
          .otherwise(() => {});
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner.data]);
  return (
    <div>
      <div className="flex items-center gap-5 flex-col md:flex-row">
        <div className="w-[15rem] h-[15rem] flex items-center justify-center flex-col gap-2">
          <p className="text-xl uppercase tracking-wide">You picked</p>
          {match(move)
            .with(1, () => {
              return (
                <div className="cursor-pointer rounded-full bg-gradient-to-b from-from-rock to-to-rock w-[10rem] h-[10rem] flex items-center justify-center drop-shadow-md">
                  <div className="bg-white rounded-full p-9">
                    <Rock />
                  </div>
                </div>
              );
            })
            .with(2, () => {
              return (
                <div className="cursor-pointer rounded-full bg-gradient-to-b from-from-paper to-to-paper w-[10rem] h-[10rem] flex items-center justify-center drop-shadow-md">
                  <div className="bg-white rounded-full p-9">
                    <Paper />
                  </div>
                </div>
              );
            })
            .with(3, () => {
              return (
                <div className="cursor-pointer rounded-full bg-gradient-to-b from-from-scissors to-to-scissors w-[10rem] h-[10rem] flex items-center justify-center drop-shadow-md">
                  <div className="bg-white rounded-full p-9">
                    <Scissors />
                  </div>
                </div>
              );
            })
            .otherwise(() => null)}
        </div>
        <div className="w-[15rem] h-[15rem]  flex items-center justify-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            {winner.isLoading || computerMove.isPending ? (
              <Loader />
            ) : (
              <>
                {match(winner.data)
                  .with(1, () => (
                    <p className="text-xl uppercase">It's A Tie</p>
                  ))
                  .with(2, () => (
                    <p className="text-xl uppercase">You Win 🥳</p>
                  ))
                  .with(3, () => (
                    <p className="text-xl uppercase">Computer Win 😢</p>
                  ))
                  .otherwise(() => null)}
                <Button
                  onClick={() => {
                    resetStep();
                    resetMove();
                  }}
                  className={clsx(
                    "text-black font-bold h-10 w-40 bg-white text-xl",
                    {
                      "text-green-400": winner.data === 2,
                      "text-red-500": winner.data === 3,
                    },
                  )}
                >
                  Play Again
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="w-[15rem] h-[15rem]  flex items-center justify-center flex-col gap-2">
          <p className="text-xl uppercase tracking-wide text-center">
            Computer picked
          </p>
          {computer.isPending || computerMove.isLoading ? (
            <Loader />
          ) : (
            <>
              {match(computerMove.data)
                .with(1, () => {
                  return (
                    <div className="cursor-pointer rounded-full bg-gradient-to-b from-from-rock to-to-rock w-[10rem] h-[10rem] flex items-center justify-center drop-shadow-md">
                      <div className="bg-white rounded-full p-9">
                        <Rock />
                      </div>
                    </div>
                  );
                })
                .with(2, () => {
                  return (
                    <div className="cursor-pointer rounded-full bg-gradient-to-b from-from-paper to-to-paper w-[10rem] h-[10rem] flex items-center justify-center drop-shadow-md">
                      <div className="bg-white rounded-full p-9">
                        <Paper />
                      </div>
                    </div>
                  );
                })
                .with(3, () => {
                  return (
                    <div className="cursor-pointer rounded-full bg-gradient-to-b from-from-scissors to-to-scissors w-[10rem] h-[10rem] flex items-center justify-center drop-shadow-md">
                      <div className="bg-white rounded-full p-9">
                        <Scissors />
                      </div>
                    </div>
                  );
                })
                .otherwise(() => null)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
