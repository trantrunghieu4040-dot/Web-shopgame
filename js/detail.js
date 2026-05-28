document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const game = getGameById(id);

  if (!game) {
    document.body.innerHTML += `<p style="text-align:center;padding:80px;color:var(--text2)">Game không tồn tại.</p>`;
    return;
  }

  updateCartBadge();
  renderDetail(game);
});

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cartBadge");
  if (badge) badge.textContent = cart.length;
}

function renderDetail(game) {
  document.title = game.title + " — GameStore";

  const finalPrice = getFinalPrice(game);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const inCart = cart.some(c => c.id === game.id);

  // Stars
  const stars = "★".repeat(Math.round(game.rating)) + "☆".repeat(5 - Math.round(game.rating));

  document.getElementById("detailContent").innerHTML = `
    <div class="detail-header">
      <img src="${game.image}" alt="${game.title}" onerror="this.src='https://picsum.photos/seed/fallback/400/200'">
      <div class="detail-info">
        <h1>${game.title}</h1>
        <div style="color:#f4c430;font-size:1.1rem">${stars} <span style="color:var(--text2);font-size:0.85rem">(${game.rating}/5)</span></div>
        <div class="detail-tags">
          ${game.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="meta-info">
          <div>Thể loại: <span>${game.genre}</span></div>
          <div>Nhà phát triển: <span>${game.developer}</span></div>
          <div>Nhà phát hành: <span>${game.publisher}</span></div>
          <div>Ngày phát hành: <span>${formatDate(game.releaseDate)}</span></div>
        </div>
        <div class="detail-price ${game.price === 0 ? "free" : ""}">
          ${game.discount > 0 ? `<span style="text-decoration:line-through;font-size:1rem;color:var(--text2)">${formatPrice(game.price)}</span>
          <span class="discount-badge" style="font-size:0.85rem;vertical-align:middle">-${game.discount}%</span><br>` : ""}
          ${formatPrice(finalPrice)}
        </div>
        <button class="btn-big ${inCart ? "added" : ""}" id="addBtn" onclick="handleAddToCart(${game.id})">
          ${inCart ? "✓ Đã thêm vào giỏ" : "🛒 Thêm vào giỏ hàng"}
        </button>
        <button class="btn-big" style="background:transparent;border:1px solid var(--border);color:var(--text2)" onclick="window.location.href='index.html'">
          ← Quay lại
        </button>
      </div>
    </div>

    <h2 class="section-title">Mô tả</h2>
    <p class="detail-desc">${game.description}</p>

    <h2 class="section-title" style="margin-top:30px">Ảnh chụp màn hình</h2>
    <div class="screenshots">
      ${game.screenshots.map(s => `<img src="${s}" alt="screenshot" onerror="this.src='https://picsum.photos/seed/fallback/600/338'">`).join("")}
    </div>
  `;
}

function handleAddToCart(id) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    showToast("Vui lòng đăng nhập để thêm vào giỏ hàng!");
    setTimeout(() => window.location.href = "login.html", 1200);
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const game = getGameById(id);
  if (!game) return;

  if (cart.some(c => c.id === id)) {
    showToast("Game đã có trong giỏ hàng!");
    return;
  }

  cart.push({ id: game.id, title: game.title, price: getFinalPrice(game), image: game.image, genre: game.genre });
  localStorage.setItem("cart", JSON.stringify(cart));

  const btn = document.getElementById("addBtn");
  btn.textContent = "✓ Đã thêm vào giỏ";
  btn.classList.add("added");
  updateCartBadge();
  showToast(`✅ Đã thêm "${game.title}" vào giỏ hàng!`);
}

function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString("vi-VN");
}

function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}
