let model

// Scene setup
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000) // Aspect ratio will be set in resizeRenderer

// =================== START: โค้ดที่แก้ไข ===================

// สร้าง Renderer ให้มีพื้นหลังโปร่งใส (alpha: true)
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true // <<< ทำให้ Canvas โปร่งใส
})

// ไม่ต้องกำหนดสีพื้นหลังแล้ว เพราะเราจะใช้พื้นหลังของ CSS
// renderer.setClearColor(0x...); 

// ==================== END: โค้ดที่แก้ไข ====================

document.querySelector(".model-wrapper").appendChild(renderer.domElement)

function resizeRenderer() {
    const modelWrapper = document.querySelector(".model-wrapper")
    if (modelWrapper) {
        renderer.setSize(modelWrapper.clientWidth, modelWrapper.clientHeight)
        camera.aspect = modelWrapper.clientWidth / modelWrapper.clientHeight
        camera.updateProjectionMatrix()
    }
}
resizeRenderer()


// OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement)

// 1. ปิดการใช้งานการซูม
controls.enableZoom = false

// 2. จำกัดการหมุนให้อยู่ในแกนแนวนอนเท่านั้น
controls.minPolarAngle = Math.PI / 2
controls.maxPolarAngle = Math.PI / 2

// Lighting
const light = new THREE.AmbientLight(0xffffff, 0.8) // เพิ่มความสว่างของ AmbientLight เล็กน้อย
scene.add(light)

const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5) // ลดความเข้มของ DirectionalLight ลงนิดหน่อย
directionalLight.position.set(5, 10, 7.5)
scene.add(directionalLight)


// Load the 3D model
const loader = new THREE.GLTFLoader()
// **ตรวจสอบให้แน่ใจว่า path ไปยังไฟล์โมเดลถูกต้อง**
loader.load('./model/model1.gltf', function (gltf) {
    model = gltf.scene

    // ปรับขนาดและตำแหน่งโมเดลตามความเหมาะสม (อาจต้องลองปรับค่า)
    model.scale.set(1.5, 1.5, 1.5)
    model.position.y = -0.5 // เลื่อนโมเดลลงเล็กน้อยให้อยู่กลางๆ

    scene.add(model)
    renderer.render(scene, camera)

}, undefined, function (error) {
    console.error('An error happened while loading the model:', error)
})

// Camera position
camera.position.set(0, 0, 2.5) // ปรับตำแหน่งกล้องให้อยู่ด้านหน้าและสูงระดับสายตา

// Animation loop
function animate() {
    requestAnimationFrame(animate)

    controls.update()

    if (model) {
        // หมุนโมเดลอัตโนมัติ
        model.rotation.y += 0.005

        // ไม่จำเป็นต้องใช้ camera.lookAt() แล้ว เพราะ OrbitControls จัดการให้
        camera.lookAt(model.position)
    }

    renderer.render(scene, camera)
}
animate()

// Handle window resizing
window.addEventListener('resize', resizeRenderer)