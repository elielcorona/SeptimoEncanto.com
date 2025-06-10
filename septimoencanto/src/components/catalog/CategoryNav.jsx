// src/components/catalog/CategoryNav.jsx


export default function CategoryNav({ selected, onChange }) {
  const categories = ['Todos', 'Decoración', 'Geles', 'Utensilios'];

  return (
    <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`btn btn-sm ${selected === cat ? 'btn-dark' : 'btn-outline-dark'}`}
        >
          {cat}
        </button>
        
      ))}
    </div>
  );
}