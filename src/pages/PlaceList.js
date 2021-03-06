import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Loading, Pagination, PlaceList } from "../components";
import { getPlaces } from "../api.js";

export function PlaceListPage() {
  const [places, setPlaces] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const perPage = 5;
  const page = +query.get("page") || 1;

  useEffect(() => {
    getPlaces({
      limit: perPage,
      offset: (page - 1) * perPage,
    }).then((data) => {
      setPlaces(data);
    });
  }, [page]);

  return (
    <>
      <Breadcrumb
        links={[
          { href: "/", content: "トップページ" },
          { href: "/places", content: "会場一覧", active: true },
        ]}
      />
      {places == null ? (
        <Loading />
      ) : (
        <section className="place_section">
          {places.rows.map((place) => {
            return <PlaceList key={place.id} place={place} />;
          })}
          <Pagination
            path="/places"
            page={page}
            perPage={perPage}
            count={places?.count}
          />
        </section>
      )}
    </>
  );
}
