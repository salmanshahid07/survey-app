import { Routes, Route, Navigate } from "react-router-dom";
import Companies from "../components/Companies";
import CompanyDetails from "../components/CompanyDetails";
import CreateNewSurvey from "../components/CreateNewSurvey";
import ViewAllSurveys from "../components/ViewAllSurveys";

const Routers = () => {
  return (
    <Routes>
      <Route path="/navigations/companies" element={<Companies />} />
      <Route path="/navigations/companies/:id" element={<CompanyDetails />} />
      <Route path="/navigations" element={<div>Dashboard</div>} />
      <Route path="/navigations/users" element={<div>Users</div>} />
      <Route path="/navigations/surveys" element={<div>Surveys</div>} />
      <Route path="/navigations/surveys/viewall" element={<ViewAllSurveys />} />
      <Route
        path="/navigations/surveys/createnew"
        element={<CreateNewSurvey />}
      />
    </Routes>
  );
};

export default Routers;
