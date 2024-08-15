import iconTransportation from "../assets/icons/icon-gasStation.svg";
import iconLodging from "../assets/icons/icon-house.svg";
import iconConsumption from "../assets/icons/icon-burgerAndDrink.svg";
import iconEmergencyFund from "../assets/icons/icon-alert.svg";
import iconSouvenir from "../assets/icons/icon-smallGift.svg";
import iconMoneyBag from "../assets/icons/icon-moneybag.svg";

import { useEffect, useState } from "react";

export default function InputBudget({ handleSubmit, setIsShowInputBudget, initialValue }) {
  const [budgetTransportation, setBudgetTransportation] = useState(initialValue.transportation ? initialValue.transportation : "");
  const [budgetLodging, setBudgetLodging] = useState(initialValue.lodging ? initialValue.lodging : "");
  const [budgetConsumption, setBudgetConsumption] = useState(initialValue.consumption ? initialValue.consumption : "");
  const [budgetEmergencyFund, setBudgetEmergencyFund] = useState(initialValue.emergencyFund ? initialValue.emergencyFund : "");
  const [budgetSouvenir, setBudgetSouvenir] = useState(initialValue.souvenir ? initialValue.souvenir : "");
  const [budgetTotal, setBudgetTotal] = useState(initialValue.total ? initialValue.total : 0);

  useEffect(() => {
    const total = (parseFloat(budgetTransportation) || 0) + (parseFloat(budgetLodging) || 0) + (parseFloat(budgetConsumption) || 0) + (parseFloat(budgetEmergencyFund) || 0) + (parseFloat(budgetSouvenir) || 0);
    setBudgetTotal(total);
  }, [budgetTransportation, budgetConsumption, budgetLodging, budgetSouvenir, budgetEmergencyFund]);

  const handleShowInputBudget = (value) => {
    setIsShowInputBudget(value);
  };

  return (
    <div className="relative p-4 w-full max-w-2xl max-h-full transition-all">
      <div className="relative bg-white rounded-lg shadow p-4 md:p-5 transition-all">
        <div className="flex items-center justify-between rounded-t transition-all">
          <h3 className="text-lg font-semibold text-black titel1-bold">Buat catatan keuangan kamu</h3>
          <button onClick={() => handleShowInputBudget(false)} className=" lg:p-2.5 p-2 rounded-lg text-2xl text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 jbDropShadow">
            <svg className="lg:w-4 lg:h-4 w-3 h-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33333 1.33496L19.6667 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M19.6668 1.33496L1.33349 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <form
          className="mt-6 flex flex-col transition-all"
          onSubmit={(e) => {
            e.preventDefault();
            const financialRecords = {
              transportation: budgetTransportation,
              lodging: budgetLodging,
              consumption: budgetConsumption,
              emergencyFund: budgetEmergencyFund,
              souvenir: budgetSouvenir,
              total: budgetTotal,
            };
            handleSubmit(e, financialRecords);
            handleShowInputBudget(false);
          }}
        >
          <div className="grid gap-5 mb-4 grid-cols-2">
            <div className="col-span-2 ">
              <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                <label htmlFor="input-budget-transportation" className="flex items-center justify-between h-[65%] gap-3 w-2/5 pr-4 border-r border-[#BDBBBB] overflow-visible">
                  <img className="md:w-8 md:h-7 w-7 h-6" src={iconTransportation} alt="Location Icon" />
                  <h2 className="w-full text-body">Transportasi</h2>
                </label>
                <input
                  id="input-budget-transportation"
                  type="number"
                  value={budgetTransportation}
                  onChange={(e) => setBudgetTransportation(e.target.value)}
                  placeholder="Transportasi (e-toll, bensin, dll) [Text box]"
                  className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                  required
                />
              </div>
            </div>

            <div className="col-span-2 ">
              <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                <label htmlFor="input-budget-lodging" className="flex items-center justify-between h-[65%] gap-3 w-2/5 pr-4 border-r border-[#BDBBBB] overflow-visible">
                  <img className="md:w-8 md:h-7 w-7 h-6" src={iconLodging} alt="Location Icon" />
                  <h2 className="w-full text-body">Penginapan</h2>
                </label>
                <input
                  id="input-budget-lodging"
                  type="number"
                  value={budgetLodging}
                  onChange={(e) => setBudgetLodging(e.target.value)}
                  placeholder="Penginapan [Text box]"
                  className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                  required
                />
              </div>
            </div>

            <div className="col-span-2 ">
              <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                <label htmlFor="input-budget-consumption" className="flex items-center justify-between h-[65%] gap-3 w-2/5 pr-4 border-r border-[#BDBBBB] overflow-visible">
                  <img className="md:w-8 md:h-7 w-7 h-6" src={iconConsumption} alt="Location Icon" />
                  <h2 className="w-full text-body">Konsumsi</h2>
                </label>
                <input
                  id="input-budget-consumption"
                  type="number"
                  value={budgetConsumption}
                  onChange={(e) => setBudgetConsumption(e.target.value)}
                  placeholder="Konsumsi [Text box]"
                  className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                  required
                />
              </div>
            </div>

            <div className="col-span-2 ">
              <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                <label htmlFor="input-budget-emergencyFund" className="flex items-center justify-between h-[65%] gap-3 w-2/5 pr-4 border-r border-[#BDBBBB] overflow-visible">
                  <img className="md:w-8 md:h-7 w-7 h-6" src={iconEmergencyFund} alt="Location Icon" />
                  <h2 className="w-full text-body">Dana Darurat</h2>
                </label>
                <input
                  id="input-budget-emergencyFund"
                  type="number"
                  value={budgetEmergencyFund}
                  onChange={(e) => setBudgetEmergencyFund(e.target.value)}
                  placeholder="Dana darurat [Text box]"
                  className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                  required
                />
              </div>
            </div>

            <div className="col-span-2 ">
              <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                <label htmlFor="input-budget-souvenir" className="flex items-center justify-between h-[65%] gap-3 w-2/5 pr-4 border-r border-[#BDBBBB] overflow-visible">
                  <img className="md:w-8 md:h-7 w-7 h-6" src={iconSouvenir} alt="Location Icon" />
                  <h2 className="w-full text-body">Oleh-oleh</h2>
                </label>
                <input
                  id="input-budget-souvenir"
                  type="number"
                  value={budgetSouvenir}
                  onChange={(e) => setBudgetSouvenir(e.target.value)}
                  placeholder="Dana oleh-oleh [Text box]"
                  className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                  required
                />
              </div>
            </div>

            <div className="col-span-2 ">
              <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                <label htmlFor="input-budget-total" className="flex items-center justify-between h-[65%] gap-3 w-2/5 pr-4 border-r border-[#BDBBBB] overflow-visible">
                  <img className="md:w-8 md:h-7 w-7 h-6" src={iconMoneyBag} alt="Location Icon" />
                  <h2 className="w-full text-body">Total</h2>
                </label>
                <input
                  id="input-budget-total"
                  type="number"
                  value={budgetTotal}
                  placeholder="Total dana di atas (otomatis terhitung) [Text box]"
                  className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                  disabled
                />
              </div>
            </div>
          </div>
          <button type="submit" className="text-black text-body inline-flex items-center bg-white hover:bg-slate-50 focus:ring-2 focus:outline-none focus:ring-slate-100 rounded-lg px-5 py-2.5 text-center mx-auto jbDropShadow">
            Tambah catatan keuangan
          </button>
        </form>
      </div>
    </div>
  );
}
